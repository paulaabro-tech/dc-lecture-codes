const people = [
  { name: "A", age: 17 },
  { name: "B", age: 16 },
  { name: "C", age: 15 },
  { name: "D", age: 14 },
  { name: "E", age: 13 },
  { name: "F", age: 12 }
];
const numbers = [1, 2, 3, 4];

const evens = numbers.map(number => number * 2);
console.log(numbers);
console.log(evens);
console.log();

const updatedPeople = people.map(({ name, age }) => ({ name: `${name}. Smith`, age: age + 10 }));
console.log(people);
console.log(updatedPeople);
console.log();

const tripler = number => number * 3;
const sum = number => number + 10;
const sub = number => number - 3;
const triple = numbers.map(tripler);
const tripleSum = numbers.map(tripler).map(sum);
const tripleSumSub = numbers.map(tripler).map(sum).map(sub);
console.log(numbers);
console.log(triple);
console.log(tripleSum);
console.log(tripleSumSub);

const prices = [15, 20, 25, 50];
const toDollars = price => `$ ${price.toFixed(2)}`;
console.log(prices.map(tripler).map(toDollars));
