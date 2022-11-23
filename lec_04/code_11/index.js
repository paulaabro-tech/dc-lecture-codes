const name1 = "Paula";
const name2 = "Paula";
const name3 = "Marie";

console.log(`${name1} == ${name2} is ${name1 == name2}`);
console.log(`${name1} == ${name3} is ${name1 == name3}`);
console.log(`${name1} === ${name2} is ${name1 === name2}`);
console.log(`${name1} === ${name3} is ${name1 === name3}`);
console.log();

const num1 = 21;
const num2 = 21;
const num3 = 2.1;
const num4 = "21";

console.log(`${num1} == ${num2} is ${num1 == num2}`);
console.log(`${num1} == ${num3} is ${num1 == num3}`);
console.log(`${num1} == ${num4} is ${num1 == num4}`);

console.log(`${num1} === ${num2} is ${num1 === num2}`);
console.log(`${num1} === ${num3} is ${num1 === num4}`);
console.log(`${num1} === ${num4} is ${num1 === num4}`);
console.log();

console.log(`${num1} != ${num2} is ${num1 != num2}`);
console.log(`${num1} != ${num3} is ${num1 != num3}`);
console.log(`${num1} != ${num4} is ${num1 != num4}`);

console.log(`${num1} !== ${num2} is ${num1 !== num2}`);
console.log(`${num1} !== ${num3} is ${num1 !== num4}`);
console.log(`${num1} !== ${num4} is ${num1 !== num4}`);
