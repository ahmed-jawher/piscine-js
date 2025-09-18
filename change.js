// Assume a shared sourceObject exists or initialize one
// eslint-disable-next-line no-redeclare, no-undef
const sourceObject = (typeof sourceObject !== 'undefined') ? sourceObject : {};

// get: takes a key and returns the corresponding value from sourceObject
function get(key) {
  return sourceObject[key];
}

// set: takes a key and a value; updates sourceObject and returns the value
function set(key, value) {
  sourceObject[key] = value;
  return value;
}

