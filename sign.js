// sign: return 1 for positive, -1 for negative, 0 for zero (no Math.sign)
function sign(n) {
  if (n > 0) return 1;
  if (n < 0) return -1;
  return 0;
}

// sameSign: returns true if both numbers have same sign (including both zero)
function sameSign(a, b) {
  return sign(a) === sign(b);
}

