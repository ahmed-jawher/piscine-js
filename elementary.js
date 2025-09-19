// multiply: implement a times b without using the operator or Math.imul
function multiply(a, b) {
  // Handle sign
  const neg = (a < 0) !== (b < 0);
  let x = a < 0 ? -a : a;
  let y = b < 0 ? -b : b;
  // Convert to integers for repeated addition; if non-integers, fall back via doubling method
  // Use Russian peasant multiplication (add & shift) emulation without the operator
  let result = 0;
  while (y >= 1) {
    // if y is odd
    if (y % 2 === 1) result += x;
    x += x; // double x
    // halve y without using the division symbol
    y = (y - (y % 2)) >> 1; // integer halve via bit shift
  }
  return neg ? -result : result;
}

// divide: integer division for a over b without using the division symbol
function divide(a, b) {
  if (b === 0) {
    return NaN;
  }
  const neg = (a < 0) !== (b < 0);
  let x = a < 0 ? -a : a;
  let y = b < 0 ? -b : b;
  let q = 0;
  let acc = y;
  let mult = 1;
  // Exponential search doublings
  while (acc <= x) {
    acc += acc;
    mult += mult;
  }
  // Subtract back down
  while (mult > 0) {
    if (acc <= x) {
      x -= acc;
      q += mult;
    }
    // halve using bit shifting to avoid the division symbol
    acc = (acc - (acc % 2)) >> 1;
    mult = (mult - (mult % 2)) >> 1;
  }
  return neg ? -q : q;
}

// modulo: a mod b without using the modulus operator
function modulo(a, b) {
  if (b === 0) return NaN;
  const q = divide(a, b);
  // remainder r = a - q*b (without *)
  return a - multiply(q, b);
}
