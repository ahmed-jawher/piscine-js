// Implement utilities using Array.prototype.filter

function filterShortStateName(arr) {
  return arr.filter((s) => String(s).length < 7);
}

function filterStartVowel(arr) {
  return arr.filter((s) => /^[aeiou]/i.test(String(s)));
}

function filter5Vowels(arr) {
  const vowelRe = /[aeiou]/ig;
  return arr.filter((s) => (String(s).match(vowelRe) || []).length >= 5);
}

function filter1DistinctVowel(arr) {
  return arr.filter((s) => {
    const set = new Set(String(s).toLowerCase().match(/[aeiou]/g) || []);
    return set.size === 1 && set.size !== 0;
  });
}

function multiFilter(arr) {
  const startsWithVowel = /^[aeiou]/i;
  const hasVowel = /[aeiou]/i;
  return arr.filter((o) =>
    String(o.capital).length >= 8 &&
    !startsWithVowel.test(String(o.name)) &&
    hasVowel.test(String(o.tag)) &&
    String(o.region) !== 'South'
  );
}

