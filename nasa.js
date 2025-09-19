// nasa: return string 1..N with substitutions for multiples of 3/5
function nasa(N) {
  const n = N | 0;
  const out = [];
  for (let i = 1; i <= n; i++) {
    const by3 = i % 3 === 0;
    const by5 = i % 5 === 0;
    if (by3 && by5) out.push('NASA');
    else if (by3) out.push('NA');
    else if (by5) out.push('SA');
    else out.push(String(i));
  }
  return out.join(' ');
}
