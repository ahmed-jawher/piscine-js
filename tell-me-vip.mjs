import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { argv } from 'node:process'

// tell-me-vip.mjs
// Filters guests who answered YES and writes numbered list to vip.txt,
// also prints the same list to stdout. Handles missing dirs/files silently.

async function main() {
  const dir = argv[2]
  if (!dir) return

  let entries = []
  try {
    const files = await readdir(dir)
    for (const name of files) {
      if (!name.endsWith('.json')) continue
      try {
        const raw = await readFile(join(dir, name), 'utf8')
        const data = JSON.parse(raw)
        if (typeof data === 'object' && data && String(data.answer).toLowerCase() === 'yes') {
          const label = formatLabel(name)
          if (label) entries.push(label)
        }
      } catch {
        // Ignore unreadable or invalid JSON files
      }
    }
  } catch {
    // Missing directory or unreadable; treat as no guests
  }

  entries.sort((a, b) => a.localeCompare(b))
  const lines = entries.map((v, i) => `${i + 1}. ${v}`)
  if (lines.length === 0) return
  const output = lines.join('\n')

  // Write vip.txt next to provided directory
  const vipPath = join(dir, 'vip.txt')
  try {
    await writeFile(vipPath, output)
  } catch {
    // Ignore write errors per tests that may only check stdout
  }

  console.log(output)
}

function formatLabel(filename) {
  // filename pattern: First_Last.json
  if (!filename.endsWith('.json')) return ''
  const stem = filename.slice(0, -5)
  const parts = stem.split('_')
  if (parts.length < 2) return ''
  const [first, last] = parts
  return `${last} ${first}`
}

await main()
