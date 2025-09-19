// sameAmount: return true if two regexps match a string the same number of times
function sameAmount(str, re1, re2) {
  const s = String(str);
  const count = (re) => {
    if (!(re instanceof RegExp)) return 0;
    // Use global copy to iterate without side effects
    const flags = (re.ignoreCase ? 'i' : '') + (re.multiline ? 'm' : '') + (re.unicode ? 'u' : '') + (re.sticky ? 'y' : '') + 'g';
    const r = new RegExp(re.source, flags);
    let c = 0;
    while (r.exec(s) !== null) c++;
    return c;
  };
  return count(re1) === count(re2);
}

