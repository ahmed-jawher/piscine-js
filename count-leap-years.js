export function countLeapYears(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return 0
  const y = date.getFullYear()
  // Count of leap years from 1..(y-1) in Gregorian rule
  // Formula: floor((y-1)/4) - floor((y-1)/100) + floor((y-1)/400)
  const n = y - 1
  const count = Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)
  return count
}
