// Extract URLs and filter by query parameter counts

function getURL(dataSet) {
  const s = String(dataSet);
  const re = /(https?:\/\/[^\s]+)/g;
  const out = [];
  let m;
  while ((m = re.exec(s)) !== null) {
    out.push(m[1]);
  }
  return out;
}

function countQueryParams(url) {
  const qIndex = url.indexOf('?');
  if (qIndex === -1) return 0;
  const query = url.slice(qIndex + 1);
  if (query.length === 0) return 0;
  // Split on '&' and count non-empty parts
  const parts = query.split('&').filter((p) => p.length > 0);
  return parts.length;
}

function greedyQuery(dataSet) {
  return getURL(dataSet).filter((u) => countQueryParams(u) >= 3);
}

function notSoGreedy(dataSet) {
  return getURL(dataSet).filter((u) => {
    const n = countQueryParams(u);
    return n >= 2 && n <= 3;
  });
}
