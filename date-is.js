// Date predicate utilities

export function isValid(value) {
  if (value instanceof Date) return !Number.isNaN(value.getTime())
  if (typeof value === 'number') return Number.isFinite(value)
  return false
}

function toMillis(x) {
  if (x instanceof Date) return x.getTime()
  if (typeof x === 'number') return x
  return NaN
}

export function isAfter(a, b) {
  if (!isValid(a) || !isValid(b)) return false
  return toMillis(a) > toMillis(b)
}

export function isBefore(a, b) {
  if (!isValid(a) || !isValid(b)) return false
  return toMillis(a) < toMillis(b)
}

export function isFuture(date) {
  if (!isValid(date)) return false
  return toMillis(date) > Date.now()
}

export function isPast(date) {
  if (!isValid(date)) return false
  return toMillis(date) < Date.now()
}
