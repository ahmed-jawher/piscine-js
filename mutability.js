var person = { name: "Alice", age: 30, country: "US" };

const clone1 = { ...person };
const clone2 = Object.assign({}, person);
const samePerson = person;

person.age += 1;
person.country = "FR";