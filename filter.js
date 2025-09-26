// Standalone filter/reject/partition utilities

function filter(arr, fn, thisArg) {
  const len = arr == null ? 0 : arr.length >>> 0;
  const out = [];
  for (let i = 0; i < len; i++) {
    if (!(i in arr)) continue;
    const v = arr[i];
    if (fn.call(thisArg, v, i, arr)) out.push(v);
  }
  return out;
}

function reject(arr, fn, thisArg) {
  return filter(arr, function (v, i, a) { return !fn.call(thisArg, v, i, a); });
}

function partition(arr, fn, thisArg) {
  const pass = [];
  const fail = [];
  const len = arr == null ? 0 : arr.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (!(i in arr)) continue;
    const v = arr[i];
    (fn.call(thisArg, v, i, arr) ? pass : fail).push(v);
  }
  return [pass, fail];
}

