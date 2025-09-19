// Utilities for cutting/keeping parts of a string
function cutFirst(s) {
  const str = String(s);
  return str.slice(2);
}

function cutLast(s) {
  const str = String(s);
  return str.slice(0, -2);
}

function cutFirstLast(s) {
  return cutLast(cutFirst(s));
}

function keepFirst(s) {
  const str = String(s);
  return str.slice(0, 2);
}

function keepLast(s) {
  const str = String(s);
  return str.slice(-2);
}

function keepFirstLast(s) {
  const str = String(s);
  if (str.length <= 2) return str;
  return keepFirst(str) + keepLast(str);
}
