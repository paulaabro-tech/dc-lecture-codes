const num = 314 / 2;
const numStr = "314 / 2";

console.log(num);
console.log(numStr);
console.log();

const num1 = 216;
const num2 = 7;

let result = num1 + num2;
console.log(`${num1} + ${num2} = ${result}`);

result = num1 - num2;
console.log(`${num1} - ${num2} = ${result}`);

result = num1 * num2;
console.log(`${num1} * ${num2} = ${result}`);

result = num1 / num2;
console.log(`${num1} / ${num2} = ${result}`);

result = num1 % num2;
console.log(`${num1} % ${num2} = ${result}`);

result = num1 ** num2;
console.log(`${num1} ** ${num2} = ${result}`);
console.log();

result = num / numStr;
console.log(`${num} / '${numStr}' = ${result}`);
