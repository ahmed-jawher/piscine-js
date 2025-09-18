// escapeStr must include: `, \, /, " and '
const escapeStr = "` \\/\"'";

// Array with values 4 and '2'
const arr = Object.freeze([4, '2']);

// Object with primitive values and a nested frozen structure
const obj = Object.freeze({
  str: "Hello World",
  num: 42,
  bool: true,
  undef: undefined,
  nested: Object.freeze({
    arr: Object.freeze([4, undefined, '2']),
    obj: Object.freeze({
      str: "Nested String",
      num: 100,
      bool: false
    })
  })
});