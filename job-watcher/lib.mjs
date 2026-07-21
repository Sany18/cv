const UA = "Mozilla/5.0 (compatible; personal-job-watcher/1.0; local use)";

export async function fetchText(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.text();
}

export async function fetchJson(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json" } });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.json();
}

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'", nbsp: " " };

export function decodeEntities(str = "") {
  return str.replace(/&(#39|amp|lt|gt|quot|nbsp);/g, (_, e) => ENTITIES[e]);
}

export function stripTags(str = "") {
  return decodeEntities(str.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ")).trim();
}

// Minimal <item>...</item> extractor for RSS 2.0 feeds — avoids pulling in an XML dependency
// for feeds that are always flat (no nested items).
export function parseRssItems(xml) {
  const items = [];
  const blocks = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
  for (const block of blocks) {
    const get = (tag) => {
      const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
      if (!m) return "";
      return decodeEntities(m[1].replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, "$1")).trim();
    };
    items.push({
      title: get("title"),
      link: get("link"),
      pubDate: get("pubDate"),
      guid: get("guid") || get("link"),
      description: get("description"),
      category: get("category"),
    });
  }
  return items;
}
