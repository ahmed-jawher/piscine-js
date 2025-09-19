// slice: works for strings and arrays similar to built-in slice
function slice(input, start, end) {
  const len = input.length >>> 0;
  let s = start == null ? 0 : start;
  let e = end == null ? len : end;

  // Normalize negatives
  if (s < 0) s = Math.max(len + s, 0);
  else s = Math.min(s, len);
  if (e < 0) e = Math.max(len + e, 0);
  else e = Math.min(e, len);

  const outLen = e > s ? e - s : 0;

  if (typeof input === 'string') {
    let out = '';
    for (let i = 0; i < outLen; i++) {
      out += input[s + i];
    }
    return out;
  }

  // assume array-like
  const result = [];
  for (let i = 0; i < outLen; i++) {
    result[i] = input[s + i];
  }
  return result;
}

