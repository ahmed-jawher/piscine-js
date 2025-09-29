// Check if date is valid (supports Date object or timestamp)
function isValid(d) {
  if (typeof d === "number") d = new Date(d); // convert timestamp to Date
  return d instanceof Date && !isNaN(d.getTime());
}

// Check if first date is after second
function isAfter(d1, d2) {
  if (!isValid(d1) || !isValid(d2)) return false;
  return new Date(d1).getTime() > new Date(d2).getTime();
}

// Check if second date is after first
function isBefore(d1, d2) {
  if (!isValid(d1) || !isValid(d2)) return false;
  return new Date(d2).getTime() > new Date(d1).getTime();
}

// Check if date is in the future
function isFuture(d) {
  return isValid(d) && new Date(d).getTime() > Date.now();
}

// Check if date is in the past
function isPast(d) {
  return isValid(d) && new Date(d).getTime() < Date.now();
}
