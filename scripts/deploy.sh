#!/usr/bin/env bash
# Build the CV site locally and publish the static export to the gh-pages branch.
# GitHub Pages serves that branch as-is — no CI build.
#
#   npm run deploy            # build + publish
#   SKIP_BUILD=1 npm run deploy   # publish the existing out/ without rebuilding
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BRANCH=gh-pages
REMOTE=origin
cd "$ROOT"

if [ -n "$(git status --porcelain -- src cv.md docs/pdf next.config.mjs package.json)" ]; then
  echo "warning: uncommitted site changes — they will be deployed but are not in git" >&2
fi

if [ -z "${SKIP_BUILD:-}" ]; then
  rm -rf out
  npm run build
fi
[ -f out/index.html ] || { echo "out/ is empty — build failed?" >&2; exit 1; }

SRC_SHA="$(git rev-parse --short HEAD)"
WT="$(mktemp -d)"
cleanup() { git worktree remove --force "$WT" >/dev/null 2>&1 || true; rm -rf "$WT"; }
trap cleanup EXIT

git fetch -q "$REMOTE" "$BRANCH" 2>/dev/null || true
if git rev-parse -q --verify "$REMOTE/$BRANCH" >/dev/null; then
  git worktree add -q --detach "$WT" "$REMOTE/$BRANCH"
else
  git worktree add -q --detach "$WT"
  git -C "$WT" checkout -q --orphan "$BRANCH"
fi

# replace the branch contents with the fresh export
git -C "$WT" rm -rfq --ignore-unmatch .
find "$WT" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R out/. "$WT/"
touch "$WT/.nojekyll"   # keep _next/ (Jekyll would drop underscore dirs)

git -C "$WT" add -A
if git -C "$WT" diff --cached --quiet; then
  echo "nothing changed — site is already up to date"
  exit 0
fi
git -C "$WT" commit -q -m "Deploy ${SRC_SHA} ($(date '+%Y-%m-%d %H:%M'))"
git -C "$WT" push -q "$REMOTE" "HEAD:refs/heads/$BRANCH"
echo "deployed ${SRC_SHA} → $BRANCH; live in ~1 min at https://sany18.github.io/cv/en"
