// Define or reuse the base person object without redeclaration conflicts
// If a global/module `person` already exists, reuse it; otherwise initialize it.
// eslint-disable-next-line no-redeclare, no-undef
const person = (typeof person !== 'undefined')
  ? person
  : {
      name: 'Alice',
      age: 30,
      country: 'US',
    };

// Create three copies as requested
// - clone1 and clone2 should preserve original values regardless of later changes
//   Use shallow copies to freeze their initial snapshot.
// - samePerson must reference the same object, so changes to person reflect there.
const clone1 = { ...person };
const clone2 = Object.assign({}, person);
const samePerson = person; // same reference

// Mutate the original person
person.age += 1;
person.country = 'FR';

// Expose variables (for environments like Node or tests)
// eslint-disable-next-line no-undef
if (typeof module !== 'undefined') module.exports = { person, clone1, clone2, samePerson };
