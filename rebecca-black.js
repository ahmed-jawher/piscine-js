
export function isFriday(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return false
  // getDay(): 0=Sun..6=Sat; Friday=5
  return date.getDay() === 5
}

export function isWeekend(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return false
  const d = date.getDay()
  return d === 0 || d === 6
}

export function isLeapYear(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return false
  const y = date.getFullYear()
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
}

export function isLastDayOfMonth(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return false
  const d = date.getDate()
  const m = date.getMonth()
  const y = date.getFullYear()
  // Day 0 of next month is the last day of current month
  const lastDay = new Date(y, m + 1, 0).getDate()
  return d === lastDay
}
