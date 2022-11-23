const person = {
  name: "Paula",
  age: 26,
  gender: "female",
  address: {
    street: "505 Pondella Rd",
    city: "Fort Myers",
    state: "Florida",
    country: "US"
  }
};

console.log(person);
console.log();

console.log(person.name);
console.log(person.age);
console.log(person.gender);
console.log(person.address);
console.log();

console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.country);
console.log();

console.log(person.doNotExist);
