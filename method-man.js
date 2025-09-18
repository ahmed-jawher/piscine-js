// words: split string by spaces into array
function words(str) {
  return String(str).split(' ');
}

// sentence: join array of strings with spaces
function sentence(arr) {
  return arr.join(' ');
}

// yell: uppercase string
function yell(str) {
  return String(str).toUpperCase();
}

// whisper: lowercase string wrapped in *
function whisper(str) {
  return `*${String(str).toLowerCase()}*`;
}

// capitalize: first char upper, rest lower
function capitalize(str) {
  const s = String(str);
  if (s.length === 0) return s;
  return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

