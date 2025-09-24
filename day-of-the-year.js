// Returns the day number within the year for the given date (Jan 1 -> 1).
export function dayOfTheYear(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return NaN
  // Use UTC and set full year explicitly to handle years like 0001
  const y = date.getUTCFullYear()
  const m = date.getUTCMonth()
  const d = date.getUTCDate()
  const start = new Date(Date.UTC(0, 0, 1))
  start.setUTCFullYear(y, 0, 1)
  const current = new Date(Date.UTC(0, 0, 1))
  current.setUTCFullYear(y, m, d)
  const msPerDay = 24 * 60 * 60 * 1000
  const diff = current.getTime() - start.getTime()
  return Math.floor(diff / msPerDay) + 1
}
