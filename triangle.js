// triangle: build a left-aligned triangle of given char and height
function triangle(ch, height) {
  const c = String(ch);
  const h = height | 0;
  if (h <= 0) return '';
  let out = '';
  let line = '';
  for (let i = 1; i <= h; i++) {
    line += c;
    out += line;
    if (i !== h) out += '\n';
  }
  return out;
}

