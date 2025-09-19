// repeat: repeat a string n times (no String.prototype.repeat)
function repeat(str, n) {
  const s = String(str);
  const times = n | 0; // coerce to int
  if (times <= 0) return '';
  let out = '';
  for (let i = 0; i < times; i++) {
    out += s;
  }
  return out;
}

