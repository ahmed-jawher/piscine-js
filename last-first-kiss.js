// first: returns the first element/character of an array or string
function first(xs) {
  return xs[0];
}

// last: returns the last element/character of an array or string
function last(xs) {
  return xs[xs.length - 1];
}

// kiss: returns [last, first] for the given array or string
function kiss(xs) {
  return [last(xs), first(xs)];
}
