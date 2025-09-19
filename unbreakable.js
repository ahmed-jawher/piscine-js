// split: works like String.prototype.split but with (string, separator) order
function split(str, separator) {
  const s = String(str);
  // If separator is undefined, return [s]
  if (separator === undefined) return [s];
  const out = [];
  // Handle empty string separator: split into characters
  if (separator === '') {
    for (let i = 0; i < s.length; i++) out.push(s[i]);
    return out;
  }
  let start = 0;
  const sep = String(separator);
  const sepLen = sep.length;
  if (sepLen === 0) return [s];
  while (true) {
    const idx = s.indexOf(sep, start);
    if (idx === -1) {
      out.push(s.slice(start));
      break;
    }
    out.push(s.slice(start, idx));
    start = idx + sepLen;
  }
  return out;
}

// join: works like Array.prototype.join but with (array, separator) order
function join(arr, separator) {
  const sep = separator === undefined ? ',' : String(separator);
  let out = '';
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) out += sep;
    const val = arr[i];
    out += val == null ? '' : String(val);
  }
  return out;
}

