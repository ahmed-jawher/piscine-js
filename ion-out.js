// ionOut: return words containing 'tion' (i.e., 'ion' following a 't'), stripped of the 'ion' part
function ionOut(str) {
  const s = String(str);
  // Match whole words that contain 'tion'; capture the part before 'ion' and the rest after
  // Word pattern: \b\w*tion\w*\b, ensure 'ion' immediately follows 't'
  const re = /\b(\w*?t)ion(\w*)\b/gi;
  const out = [];
  let m;
  while ((m = re.exec(s)) !== null) {
    // Remove the 'ion' portion: concat captured groups around it
    out.push((m[1] + m[2]));
  }
  return out;
}

