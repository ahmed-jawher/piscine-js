// Implement rounding functions without string conversion, bitwise, or %

function trunc(x) {
  if (x !== x) return NaN; // NaN
  if (x === 0 || x === Infinity || x === -Infinity) return x;
  // Remove fractional part toward zero by subtracting the remainder (x - int)
  // Approach: use Math.ceil/floor depending on sign but recreate logic without them
  // We can use parseInt on numbers? That's string-based. Avoid.
  // Use difference between x and its fractional via repeated subtraction using Math.sign
  const sign = x < 0 ? -1 : 1;
  let n = 0;
  let remaining = x;
  // Speed: use exponential doubling approach to subtract large chunks
  // Build powers of two increments of 1*sign
  // cap iterations to avoid infinite loop on non-finite
  let step = sign;
  while ((sign > 0 ? n + step <= x : n + step >= x)) {
    n += step;
    step += step;
  }
  // Reduce step
  while (step !== sign) {
    step = step / 2;
    if (sign > 0 ? n + step <= x : n + step >= x) n += step;
  }
  return n;
}

function floor(x) {
  if (x !== x) return NaN;
  if (x === Infinity || x === -Infinity || x === 0) return x;
  const t = trunc(x);
  return t > x ? t - 1 : t;
}

function ceil(x) {
  if (x !== x) return NaN;
  if (x === Infinity || x === -Infinity || x === 0) return x;
  const t = trunc(x);
  return t < x ? t + 1 : t;
}

function round(x) {
  if (x !== x) return NaN;
  if (x === Infinity || x === -Infinity || x === 0) return x;
  // x >= 0: round to nearest, .5 up
  // x < 0: .5 goes toward -Infinity per Math.round(-3.5) === -3? Actually Math.round(-3.5) === -3.
  // So rule: return floor(x + 0.5)
  return floor(x + 0.5);
}

