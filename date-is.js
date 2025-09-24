// Date predicate utilities

export function isValid(date) {
  return date instanceof Date && !Number.isNaN(date.getTime())
}

export function isAfter(a, b) {
  if (!isValid(a) || !isValid(b)) return false
  return a.getTime() > b.getTime()
}

export function isBefore(a, b) {
  if (!isValid(a) || !isValid(b)) return false
  return a.getTime() < b.getTime()
}

export function isFuture(date) {
  if (!isValid(date)) return false
  return date.getTime() > Date.now()
}

export function isPast(date) {
  if (!isValid(date)) return false
  return date.getTime() < Date.now()
}

