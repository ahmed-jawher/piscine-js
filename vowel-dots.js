// Add a dot after every vowel in the string
const vowels = /[aeiou]/gi;

function vowelDots(str) {
  const s = String(str);
  return s.replace(vowels, (m) => m + '.');
}

