// pyramid: centered pyramid of given char and height (like triangle but centered)
function pyramid(ch, height) {
  const c = String(ch);
  const h = height | 0;
  if (h <= 0) return '';
  let out = '';
  for (let i = 1; i <= h; i++) {
    const spaces = h - i;
    const stars = 2 * i - 1;
    let line = '';
    for (let s = 0; s < spaces; s++) line += ' ';
    for (let k = 0; k < stars; k++) line += c;
    out += line;
    if (i !== h) out += '\n';
  }
  return out;
}


