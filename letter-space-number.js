// letterSpaceNumber: find occurrences of letter, space, single digit not followed by a letter
function letterSpaceNumber(str) {
  const s = String(str);
  const re = /([A-Za-z])\s([0-9])(?![A-Za-z])/g;
  const out = [];
  let m;
  while ((m = re.exec(s)) !== null) {
    out.push(`${m[1]} ${m[2]}`);
  }
  return out;
}
