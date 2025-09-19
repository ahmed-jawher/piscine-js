// Convert DNA <-> RNA complements

function RNA(dna) {
  const s = String(dna).toUpperCase();
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === 'G') out += 'C';
    else if (ch === 'C') out += 'G';
    else if (ch === 'T') out += 'A';
    else if (ch === 'A') out += 'U';
    else out += '';
  }
  return out;
}

function DNA(rna) {
  const s = String(rna).toUpperCase();
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === 'C') out += 'G';
    else if (ch === 'G') out += 'C';
    else if (ch === 'A') out += 'T';
    else if (ch === 'U') out += 'A';
    else out += '';
  }
  return out;
}

