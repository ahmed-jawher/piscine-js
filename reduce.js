// Implement fold, foldRight, reduce, reduceRight without using Array.prototype.reduce

function fold(arr, fn, acc) {
  const a = arr || [];
  const len = a.length >>> 0;
  let res = acc;
  for (let i = 0; i < len; i++) {
    if (i in a) res = fn(res, a[i], i, a);
  }
  return res;
}

function foldRight(arr, fn, acc) {
  const a = arr || [];
  const len = a.length >>> 0;
  let res = acc;
  for (let i = len - 1; i >= 0; i--) {
    if (i in a) res = fn(res, a[i], i, a);
  }
  return res;
}

function reduce(arr, fn) {
  if (!arr || (arr.length >>> 0) === 0) throw new Error('Reduce of empty array with no initial value');
  const a = arr;
  const len = a.length >>> 0;
  let i = 0;
  // find first present element for holes
  while (i < len && !(i in a)) i++;
  if (i >= len) throw new Error('Reduce of empty array with no initial value');
  let acc = a[i++];
  for (; i < len; i++) {
    if (i in a) acc = fn(acc, a[i], i, a);
  }
  return acc;
}

function reduceRight(arr, fn) {
  if (!arr || (arr.length >>> 0) === 0) throw new Error('Reduce of empty array with no initial value');
  const a = arr;
  const len = a.length >>> 0;
  let i = len - 1;
  while (i >= 0 && !(i in a)) i--;
  if (i < 0) throw new Error('Reduce of empty array with no initial value');
  let acc = a[i--];
  for (; i >= 0; i--) {
    if (i in a) acc = fn(acc, a[i], i, a);
  }
  return acc;
}

