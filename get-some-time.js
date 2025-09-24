// Returns the date string (dd-mm-yyyy) of the Monday starting a given week number in a year.
// - week: 1..53 (Week 1 contains Jan 1st)
// - year: string like '2023'
// Rules:
//   * Weeks start on Monday.
//   * If the computed Monday falls in the previous year, return 01-01-<year> instead.
export function firstDayWeek(week, year) {
  const y = Number(year)
  const w = Number(week)
  if (!Number.isFinite(y) || !Number.isFinite(w)) return ''
  if (w < 1 || w > 53) return ''

  // Jan 1 of given year
  const jan1 = new Date(Date.UTC(y, 0, 1))
  // JS getUTCDay(): 0=Sun..6=Sat; Need Monday=0..Sunday=6 mapping
  const jsDow = jan1.getUTCDay() // 0..6
  const mondayIndex = (jsDow + 6) % 7 // Monday=0

  // Monday of week 1 (the week containing Jan 1)
  const week1Monday = new Date(Date.UTC(y, 0, 1 - mondayIndex))

  // Monday of requested week w
  const targetMonday = new Date(week1Monday)
  targetMonday.setUTCDate(week1Monday.getUTCDate() + (w - 1) * 7)

  // If this Monday is before Jan 1 (i.e., in previous year), clamp to Jan 1
  const firstOfYear = new Date(Date.UTC(y, 0, 1))
  const resultDate = targetMonday < firstOfYear ? firstOfYear : targetMonday

  const dd = String(resultDate.getUTCDate()).padStart(2, '0')
  const mm = String(resultDate.getUTCMonth() + 1).padStart(2, '0')
  const yyyy = String(resultDate.getUTCFullYear())
  return `${dd}-${mm}-${yyyy}`
}

