// Edit this file to change what the watcher looks for.

export const config = {
  // How long (ms) a job stays flagged "NEW" after it's first seen.
  newWindowMs: 3 * 24 * 60 * 60 * 1000, // 3 days

  djinni: {
    enabled: true,
    keywords: ["React", "TypeScript", "Angular", "Three.js"],
  },

  dou: {
    enabled: true,
    categories: ["React", "JavaScript", "Node.js", "Front End"],
  },

  remoteOk: {
    enabled: true,
    // job is kept if any of its RemoteOK tags matches one of these (case-insensitive)
    tags: ["react", "typescript", "javascript", "angular", "frontend", "front-end", "node"],
  },

  weWorkRemotely: {
    enabled: true,
    categories: ["remote-programming-jobs", "remote-front-end-programming-jobs"],
    // WWR categories are broad, so titles are filtered against these keywords
    keywords: ["react", "typescript", "javascript", "angular", "three.js", "frontend", "front-end", "front end", "node"],
  },
};
