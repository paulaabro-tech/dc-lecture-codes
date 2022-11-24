const people = [
  { name: "A", age: 17 },
  { name: "B", age: 16 },
  { name: "C", age: 15 },
  { name: "D", age: 14 },
  { name: "E", age: 13 },
  { name: "F", age: 12 }
];

people.forEach(person => console.log(person));
console.log();

people.forEach((person, index) =>
  console.log(`${person.name} is ${person.age} years old and its at ${index}`)
);
console.log();

people.forEach((person, index, array) => console.log(array));
console.log();

let sumAges = 0;
people.forEach(person => (sumAges += person.age));
const avgAge = sumAges / people.length;
console.log(avgAge.toFixed(0));
console.log();

people.forEach(function (person, index) {
  console.log(`${person.name} is ${person.age} years old and its at ${index}`);
});
