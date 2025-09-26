// Implement every, some, none without using Array.prototype.every/some

function every(arr, fn, thisArg) {
  const a = arr || [];
  const len = a.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (!(i in a)) continue;
    if (!fn.call(thisArg, a[i], i, a)) return false;
  }
  return true;
}

function some(arr, fn, thisArg) {
  const a = arr || [];
  const len = a.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (!(i in a)) continue;
    if (fn.call(thisArg, a[i], i, a)) return true;
  }
  return false;
}

function none(arr, fn, thisArg) {
  return !some(arr, fn, thisArg);
}

