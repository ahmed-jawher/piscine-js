# Piscine JS

My solutions to the Reboot01 **JavaScript piscine**, an intensive bootcamp covering modern JavaScript from primitives to asynchronous programming, DOM manipulation and Node.js. The repository contains **98 exercises**.

![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)

## Topics Covered

| Topic | Example exercises |
|---|---|
| **Fundamentals** | `primitives`, `declarations`, `returns`, `mutability`, `elementary`, `abs`, `sign`, `min-max` |
| **Strings and regular expressions** | `slicer`, `reverser`, `vowel-dots`, `letter-space-number`, `greedy-url`, `quantifiers`, `match-cron`, `pronoun` |
| **Arrays and higher-order functions** | `using-map`, `using-filter`, `using-reduce`, `for-each`, `mapper`, `filter`, `reduce`, `chunky`, `index-of` |
| **Objects** | `deep-copy`, `fusion`, `pick-omit`, `manipulate-keys`, `manipulate-values`, `manipulate-entries`, `flagger`, `replica` |
| **Functional programming** | `currify`, `curry-entries`, `sweet-curry`, `flow`, `invert`, `neuron` |
| **Dates** | `date-is`, `day-of-the-year`, `count-leap-years`, `get-some-time`, `last-first-kiss` |
| **Asynchronous JS** | `is-winner`, `race`, `all`, `series`, `keep-trying-or-giveup`, `debounce`, `throttle`, `get-json`, `gougle-search` |
| **DOM and events** | `build-brick-and-break`, `gossip-grid`, `pick-and-click`, `mouse-trap`, `keycodes-symphony`, `pimp-my-style`, `where-do-we-go`, `harder-bigger-bolder-stronger` |
| **Node.js (file system and CLI)** | `verydisco`, `tell-me-how-many`, `tell-me-who`, `tell-me-vip`, `tell-it-cypher`, `friend-support`, `gatecrashers` |

## Running the Exercises

**Requirements:** Node.js 18+ and a modern browser

Most exercises define plain functions. Load one into Node and call it:

```bash
git clone https://github.com/ahmed-jawher/piscine-js.git
cd piscine-js
node -e "$(cat deep-copy.js); console.log(deepCopy({ a: [1, 2] }))"
# { a: [ 1, 2 ] }
```

The Node.js CLI exercises (`.mjs`) run directly:

```bash
node verydisco.mjs "hello world"
# lohel ldwor
```

The DOM exercises run in the browser: serve the folder (`npx serve .`) and point [`index.html`](index.html) at the exercise script you want to try.

## Author

**Ahmed Jawher** — [@ahmed-jawher](https://github.com/ahmed-jawher)
