// Returns the weekday string in a custom 14-day week.
// Epoch: 0001-01-01 (Monday) in proleptic Gregorian calendar.
// Labels: Monday..Sunday, secondMonday..secondSunday
export function addWeek(date) {
  if (!(date instanceof Date)) throw new TypeError('Expected Date')
  const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'secondMonday',
    'secondTuesday',
    'secondWednesday',
    'secondThursday',
    'secondFriday',
    'secondSaturday',
    'secondSunday',
  ]

  // Helper: floor divide that works for negatives
  const div = (a, b) => Math.trunc(a / b)

  // Convert a civil date to a fixed day count relative to 0001-01-01 as day 0
  // using proleptic Gregorian calendar (Howard Hinnant algorithm style).
  function toDayNumber(d) {
    const y = d.getFullYear()
    // JS months: 0..11; convert to 1..12 for algorithm
    let m = d.getMonth() + 1
    const day = d.getDate()

    let Y = y
    let M = m
    if (M <= 2) {
      Y -= 1
      M += 12
    }
    const era = div(Y, 400)
    const yoe = Y - era * 400 // [0, 399]
    const doy = div(153 * (M - 3) + 2, 5) + day - 1 // [0, 365]
    const doe = yoe * 365 + div(yoe, 4) - div(yoe, 100) + doy // [0, 146096]
    // Days since 0000-03-01. Offset to make 0001-01-01 be day 0.
    // 0001-01-01 is 306 days after 0000-03-01 in this mapping.
    const daysSince0000Mar01 = era * 146097 + doe
    const daysSince0001Jan01 = daysSince0000Mar01 - 306
    return daysSince0001Jan01
  }

  const dayIndex = ((toDayNumber(date) % 14) + 14) % 14
  return labels[dayIndex]
}

// Adjusts time components of the given date and returns the same Date instance.
// Expects an object: { date: Date, hour: Number, minute: Number, second: Number }
export function timeTravel({ date, hour, minute, second }) {
  if (!(date instanceof Date)) throw new TypeError('date must be a Date')
  if ([hour, minute, second].some(v => typeof v !== 'number')) {
    throw new TypeError('hour, minute, second must be numbers')
  }
  // Clone not required if we’re allowed to mutate input; but example returns Date.
  // We will mutate the provided Date to match the example behavior.
  date.setHours(hour)
  date.setMinutes(minute)
  date.setSeconds(second)
  return date
}
