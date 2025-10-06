// pick-omit: pure functions to select or exclude keys from an object
// Accepts a string or an array of strings as the selector.

function toKeySet(keys) {
  if (typeof keys === 'string') return new Set([keys]);
  if (Array.isArray(keys)) return new Set(keys);
  return new Set();
}

function pick(obj, keys) {
  const set = toKeySet(keys);
  const out = {};
  if (obj == null || set.size === 0) return out;
  for (const k in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;
    if (set.has(k)) out[k] = obj[k];
  }
  return out;
}

function omit(obj, keys) {
  const set = toKeySet(keys);
  const out = {};
  if (obj == null) return out;
  for (const k in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;
    if (set.size === 0 || !set.has(k)) out[k] = obj[k];
  }
  return out;
}
