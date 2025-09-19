// reverse: reverse an array or string without using Array.prototype.reverse
function reverse(input) {
  const len = input.length >>> 0;
  if (typeof input === 'string') {
    let out = '';
    for (let i = len - 1; i >= 0; i--) {
      out += input[i];
    }
    return out;
  }
  // assume array-like
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    result[i] = input[len - 1 - i];
  }
  return result;
}

