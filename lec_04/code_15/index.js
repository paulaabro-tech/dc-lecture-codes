const person = {
  name: "Paula",
  age: 26,
  isSmart: true,
  favoriteNumbers: [3, 7, 21, Math.PI]
};

console.log(typeof person);
console.log(typeof person.name);
console.log(typeof person.age);
console.log(typeof person.isSmart);
console.log(typeof person.favoriteNumbers);
console.log();

console.log(person);
delete person.favoriteNumbers;
console.log(person);
