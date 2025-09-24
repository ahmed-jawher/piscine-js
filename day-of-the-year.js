// Returns the day number within the year for the given date (Jan 1 -> 1).
export function dayOfTheYear(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return NaN
  const start = new Date(date.getFullYear(), 0, 1)
  // Milliseconds difference divided by ms per day, plus 1 for Jan 1 => 1
  const msPerDay = 24 * 60 * 60 * 1000
  const diff = date - start
  return Math.floor(diff / msPerDay) + 1
}

