// Implement a standalone forEach similar to Array.prototype.forEach

function forEach(arr, fn, thisArg) {
  if (arr == null) return;
  const len = arr.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (i in arr) {
      fn.call(thisArg, arr[i], i, arr);
    }
  }
}

