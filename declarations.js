// A string containing: `, \, /, " and '
const escapeStr = '` \\/"\''

// Frozen array: [4, '2']
const arr = Object.freeze([4, '2'])

// Frozen nested object (with its own frozen pieces)
const nested = Object.freeze({
  arr: Object.freeze([4, undefined, '2']),
  obj: Object.freeze({
    str: 'Nested String',
    num: 100,
    bool: false,
  }),
})

// Frozen main object with primitive values and a reference to `nested`
const obj = Object.freeze({
  str: 'Hello World',
  num: 42,
  bool: true,
  undef: undefined,
  nested, // points to the frozen `nested` above
})