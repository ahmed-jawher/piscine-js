// invert: returns a new object with keys and values swapped
// If multiple keys share the same value, later keys overwrite earlier ones.

function invert(obj) {
  const result = {};
  if (obj == null) return result;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const val = obj[key];
      result[String(val)] = key;
    }
  }
  return result;
}
