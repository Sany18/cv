// LLM callers — dependency-free, to match the rest of job-watcher.
//
// A "backend" is { name, command }:
//   - command === "api"  -> Anthropic Messages API via fetch (needs ANTHROPIC_API_KEY)
//   - any other string   -> a shell command the prompt is piped to on stdin
//                           (e.g. "claude -p", "opencode run")
//
// resolveBackends() picks the list: CV_BACKENDS env > CV_LLM_CMD env > config.cv.backends.
// runBackend() runs one and never throws — it returns { name, ok, text, error, ms }.

import { spawn } from "node:child_process";
import { config } from "./config.mjs";

const API_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";

// A CV_BACKENDS command may be prefixed with "arg:" to pass the prompt as a
// command argument instead of on stdin — e.g. CV_BACKENDS="claude=claude -p,ag=arg:agy -p"
function parseCommand(raw) {
  const trimmed = raw.trim();
  if (trimmed.startsWith("arg:")) return { command: trimmed.slice(4).trim(), promptVia: "arg" };
  return { command: trimmed, promptVia: "stdin" };
}

export function resolveBackends() {
  const env = process.env.CV_BACKENDS;
  if (env) {
    return env
      .split(",")
      .map((pair) => {
        const i = pair.indexOf("=");
        const name = i === -1 ? pair.trim() : pair.slice(0, i).trim();
        const { command, promptVia } = parseCommand(i === -1 ? pair : pair.slice(i + 1));
        return { name: name || command, command, promptVia };
      })
      .filter((b) => b.name && b.command);
  }
  if (process.env.CV_LLM_CMD) {
    const { command, promptVia } = parseCommand(process.env.CV_LLM_CMD);
    return [{ name: "cmd", command, promptVia }];
  }
  return config.cv.backends;
}

// Split a command string into argv, respecting simple quotes.
function tokenize(cmdline) {
  return (cmdline.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) || []).map((t) =>
    t.replace(/^["']|["']$/g, "")
  );
}

export function describeBackends() {
  return resolveBackends()
    .map((b) => {
      const how = b.command === "api" ? `Anthropic API: ${config.cv.model}` : b.command;
      return `${b.name} (${how}${b.promptVia === "arg" ? ", arg" : ""})`;
    })
    .join(", ");
}

function runCommand(cmdline, input, timeoutMs, promptVia = "stdin") {
  return new Promise((resolve, reject) => {
    let child;
    if (promptVia === "arg") {
      const argv = tokenize(cmdline);
      // prompt is a real argv entry — no shell, no escaping concerns
      child = spawn(argv[0], [...argv.slice(1), input], { shell: false });
      child.stdin.end();
    } else {
      child = spawn(cmdline, { shell: true });
      child.stdin.end(input);
    }
    let out = "";
    let err = "";
    const timer = setTimeout(() => {
      child.kill("SIGKILL");
      reject(new Error(`timed out after ${Math.round(timeoutMs / 1000)}s`));
    }, timeoutMs);
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (err += d));
    child.on("error", (e) => {
      clearTimeout(timer);
      reject(e);
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (code === 0 && out.trim()) resolve(out);
      else reject(new Error(`exited ${code}${err ? `: ${err.trim().slice(0, 400)}` : ""}`));
    });
  });
}

async function callApi({ system, user, maxTokens, timeoutMs }) {
  const cv = config.cv;
  const headers = {
    "content-type": "application/json",
    "x-api-key": process.env.ANTHROPIC_API_KEY,
    "anthropic-version": ANTHROPIC_VERSION,
  };
  const body = {
    model: cv.model,
    max_tokens: maxTokens || cv.maxOutputTokens,
    system,
    thinking: { type: "adaptive" },
    messages: [{ role: "user", content: user }],
  };
  if (cv.refusalFallback?.enabled) {
    headers["anthropic-beta"] = "server-side-fallback-2026-06-01";
    body.fallbacks = [{ model: cv.refusalFallback.model }];
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(timeoutMs || cv.perBackendTimeoutMs),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Anthropic API: ${data?.error?.message || `HTTP ${res.status}`}`);
  if (data.stop_reason === "refusal") {
    throw new Error(`model refused: ${data.stop_details?.explanation || data.stop_details?.category || "safety"}`);
  }
  const text = (data.content || [])
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("")
    .trim();
  if (!text) throw new Error("Anthropic API returned no text");
  return text;
}

/**
 * Run one backend. Never throws.
 * @returns {Promise<{name:string, ok:boolean, text:string, error:string|null, ms:number}>}
 */
export async function runBackend(backend, { system, user, maxTokens }) {
  const started = Date.now();
  const timeoutMs = backend.timeoutMs || config.cv.perBackendTimeoutMs;
  try {
    let text;
    if (backend.command === "api") {
      if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY not set");
      text = await callApi({ system, user, maxTokens, timeoutMs });
    } else {
      text = await runCommand(
        backend.command,
        `${system}\n\n---\n\n${user}`,
        timeoutMs,
        backend.promptVia || "stdin"
      );
    }
    return { name: backend.name, ok: true, text, error: null, ms: Date.now() - started };
  } catch (err) {
    return { name: backend.name, ok: false, text: "", error: err.message, ms: Date.now() - started };
  }
}
