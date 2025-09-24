// Returns the number of leap years from year 1 up to and including the year
// prior to the given date's year if the date is before March, otherwise including
// the date's year if it is a leap year and date is on/after March 1.
// Simpler interpretation per spec: "since the year 1" up to the given date's year - 1
// (i.e., count leap years strictly before the provided year).

export function countLeapYears(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return 0
  const y = date.getFullYear()
  // Count of leap years from 1..(y-1) in Gregorian rule
  // Formula: floor((y-1)/4) - floor((y-1)/100) + floor((y-1)/400)
  const n = y - 1
  const count = Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)
  return count
}

