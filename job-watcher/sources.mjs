import { fetchText, fetchJson, parseRssItems, stripTags, decodeEntities } from "./lib.mjs";

// --- Djinni (djinni.co) — HTML scrape, no public API available. ---
export async function fetchDjinni({ keywords }) {
  const jobs = [];
  for (const keyword of keywords) {
    const url = `https://djinni.co/jobs/?all_keywords=${encodeURIComponent(keyword)}`;
    let html;
    try {
      html = await fetchText(url);
    } catch (err) {
      console.warn(`[djinni] "${keyword}" failed: ${err.message}`);
      continue;
    }
    const chunks = html.split('<div id="job-item-').slice(1);
    for (const chunk of chunks) {
      const idMatch = chunk.match(/^(\d+)"/);
      const hrefMatch = chunk.match(/href="(\/jobs\/[^"]+)"/);
      const titleMatch = chunk.match(/class="job-item__position[^>]*>([\s\S]*?)<\/h2>/);
      const companyMatch = chunk.match(
        /class="small text-gray-800 opacity-75 font-weight-500">([^<]*)</
      );
      if (!idMatch || !hrefMatch || !titleMatch) continue;
      const id = `djinni:${idMatch[1]}`;
      jobs.push({
        id,
        source: "Djinni",
        title: stripTags(titleMatch[1]),
        company: companyMatch ? decodeEntities(companyMatch[1]).trim() : "",
        location: "Ukraine / Remote",
        url: `https://djinni.co${hrefMatch[1]}`,
        postedAt: null,
        matchedOn: keyword,
      });
    }
  }
  return dedupeById(jobs);
}

// --- DOU (jobs.dou.ua) — official per-category RSS feed. ---
export async function fetchDou({ categories }) {
  const jobs = [];
  for (const category of categories) {
    const url = `https://jobs.dou.ua/vacancies/feeds/?category=${encodeURIComponent(category)}`;
    let xml;
    try {
      xml = await fetchText(url);
    } catch (err) {
      console.warn(`[dou] "${category}" failed: ${err.message}`);
      continue;
    }
    for (const item of parseRssItems(xml)) {
      if (!item.link) continue;
      const idMatch = item.link.match(/vacancies\/(\d+)/);
      const id = `dou:${idMatch ? idMatch[1] : item.guid}`;
      const [titlePart, companyPart] = item.title.split(/ в[  ]/);
      jobs.push({
        id,
        source: "DOU",
        title: (titlePart || item.title).trim(),
        company: companyPart ? companyPart.split(",")[0].trim() : "",
        location: "Ukraine / Remote",
        url: item.link.split("?")[0],
        postedAt: item.pubDate ? new Date(item.pubDate).toISOString() : null,
        matchedOn: category,
      });
    }
  }
  return dedupeById(jobs);
}

// --- RemoteOK — official public JSON API (remoteok.com/api). ---
export async function fetchRemoteOk({ tags }) {
  const wanted = tags.map((t) => t.toLowerCase());
  let data;
  try {
    data = await fetchJson("https://remoteok.com/api");
  } catch (err) {
    console.warn(`[remoteok] failed: ${err.message}`);
    return [];
  }
  const jobs = [];
  for (const item of data) {
    if (!item.id || !item.position) continue; // first array element is metadata, not a job
    const itemTags = (item.tags || []).map((t) => String(t).toLowerCase());
    // postings with a huge tag list are usually generic/spam listings tagged with everything
    // to game search, rather than a real match on stack — skip them.
    if (itemTags.length > 15) continue;
    const matched = itemTags.find((t) => wanted.includes(t));
    if (!matched) continue;
    jobs.push({
      id: `remoteok:${item.id}`,
      source: "RemoteOK",
      title: item.position,
      company: item.company || "",
      location: item.location || "Remote",
      url: item.url || `https://remoteok.com/remote-jobs/${item.id}`,
      postedAt: item.date ? new Date(item.date).toISOString() : null,
      matchedOn: matched,
    });
  }
  return dedupeById(jobs);
}

// --- We Work Remotely — official per-category RSS feed. ---
export async function fetchWeWorkRemotely({ categories, keywords }) {
  const wanted = keywords.map((k) => k.toLowerCase());
  const jobs = [];
  for (const category of categories) {
    const url = `https://weworkremotely.com/categories/${category}.rss`;
    let xml;
    try {
      xml = await fetchText(url);
    } catch (err) {
      console.warn(`[wwr] "${category}" failed: ${err.message}`);
      continue;
    }
    for (const item of parseRssItems(xml)) {
      const haystack = item.title.toLowerCase();
      const matched = wanted.find((k) => haystack.includes(k));
      if (!matched) continue;
      const [companyPart, ...rest] = item.title.split(": ");
      jobs.push({
        id: `wwr:${item.guid}`,
        source: "WeWorkRemotely",
        title: rest.length ? rest.join(": ").trim() : item.title,
        company: rest.length ? companyPart.trim() : "",
        location: "Remote",
        url: item.link,
        postedAt: item.pubDate ? new Date(item.pubDate).toISOString() : null,
        matchedOn: matched,
      });
    }
  }
  return dedupeById(jobs);
}

function dedupeById(jobs) {
  const byId = new Map();
  for (const job of jobs) {
    if (!byId.has(job.id)) byId.set(job.id, job);
  }
  return [...byId.values()];
}
