// chunk: split an array into sub-arrays of given size
function chunk(arr, size) {
  const n = size | 0;
  if (n <= 0) return [];
  const out = [];
  for (let i = 0; i < arr.length; i += n) {
    const group = [];
    const end = i + n > arr.length ? arr.length : i + n;
    for (let j = i; j < end; j++) {
      group.push(arr[j]);
    }
    out.push(group);
  }
  return out;
}

