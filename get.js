// get: retrieve value at dot-separated path from src object
function get(src, path) {
  if (src == null) return undefined;
  if (path == null || path === '') return src;
  const parts = String(path).split('.');
  let cur = src;
  for (let i = 0; i < parts.length; i++) {
    if (cur == null) return undefined;
    const key = parts[i];
    cur = cur[key];
  }
  return cur;
}

