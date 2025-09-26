// Long words predicates over arrays

function longWords(arr) {
  return arr.every((x) => typeof x === 'string' && x.length >= 5);
}

function oneLongWord(arr) {
  return arr.some((x) => typeof x === 'string' && x.length >= 10);
}

function noLongWords(arr) {
  return arr.every((x) => !(typeof x === 'string' && x.length >= 7));
}

