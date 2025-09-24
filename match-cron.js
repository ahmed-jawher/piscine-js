// matchCron(cron, date)
// Supports only numbers and * in 5 fields:
// minute hour dayOfMonth month dayOfWeek
// dayOfWeek: 1-7 where 1=Monday ... 7=Sunday

function parseField(token) {
  if (token === '*') return null // wildcard
  const n = Number(token)
  if (!Number.isFinite(n)) return NaN
  return n
}

function getCronParts(cron) {
  const parts = String(cron).trim().split(/\s+/)
  if (parts.length !== 5) return null
  const [min, hour, dom, mon, dow] = parts.map(parseField)
  return { min, hour, dom, mon, dow }
}

export function matchCron(cron, date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return false
  const parts = getCronParts(cron)
  if (!parts) return false

  const minute = date.getMinutes()
  const hour = date.getHours()
  const day = date.getDate()
  const month = date.getMonth() + 1 // 1-12
  // Convert JS 0=Sun..6=Sat to 1=Mon..7=Sun
  const jsDow = date.getDay() // 0..6
  const dow = jsDow === 0 ? 7 : jsDow // 1..7 with Mon=1

  const { min, hour: ch, dom, mon, dow: cdow } = parts

  if (min !== null && minute !== min) return false
  if (ch !== null && hour !== ch) return false
  if (dom !== null && day !== dom) return false
  if (mon !== null && month !== mon) return false
  if (cdow !== null && dow !== cdow) return false
  return true
}

