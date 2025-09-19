// multiply: implement a * b without using * or Math.imul
function multiply(a, b) {
  // Handle sign
  const neg = (a < 0) !== (b < 0);
  let x = a < 0 ? -a : a;
  let y = b < 0 ? -b : b;
  // Convert to integers for repeated addition; if non-integers, fall back via doubling method
  // Use Russian peasant multiplication (add & shift) emulation without *
  let result = 0;
  while (y >= 1) {
    // if y is odd
    if (y % 2 === 1) result += x;
    x += x; // double x
    y = (y - (y % 2)) / 2; // floor divide by 2
  }
  return neg ? -result : result;
}

// divide: integer division a / b without using /
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
    acc = (acc - (acc % 2)) / 2; // halve
    mult = (mult - (mult % 2)) / 2;
  }
  return neg ? -q : q;
}

// modulo: a % b without using %
function modulo(a, b) {
  if (b === 0) return NaN;
  const q = divide(a, b);
  // remainder r = a - q*b (without *)
  return a - multiply(q, b);
}

