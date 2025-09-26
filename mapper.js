// Implement standalone map and flatMap like Array.prototype methods

function map(arr, fn, thisArg) {
  const len = arr == null ? 0 : arr.length >>> 0;
  const out = new Array(len);
  for (let i = 0; i < len; i++) {
    if (i in arr) out[i] = fn.call(thisArg, arr[i], i, arr);
  }
  return out;
}

function flatMap(arr, fn, thisArg) {
  const len = arr == null ? 0 : arr.length >>> 0;
  const result = [];
  for (let i = 0; i < len; i++) {
    if (!(i in arr)) continue;
    const mapped = fn.call(thisArg, arr[i], i, arr);
    if (Array.isArray(mapped)) result.push(...mapped);
    else result.push(mapped);
  }
  return result;
}

