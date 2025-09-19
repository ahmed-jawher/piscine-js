// indexOf: find first index of value in array starting at fromIndex (optional)
function indexOf(arr, value, fromIndex) {
  const start = fromIndex == null ? 0 : (fromIndex < 0 ? 0 : fromIndex | 0);
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

// lastIndexOf: find last index of value in array, optionally considering up to fromIndex
function lastIndexOf(arr, value, fromIndex) {
  let i = fromIndex == null ? arr.length - 1 : (fromIndex | 0);
  if (i >= arr.length) i = arr.length - 1;
  if (i < 0) return -1;
  for (; i >= 0; i--) {
    if (arr[i] === value) return i;
  }
  return -1;
}

// includes: true if value found in array
function includes(arr, value) {
  return indexOf(arr, value) !== -1;
}

