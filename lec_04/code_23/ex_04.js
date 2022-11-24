// Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const numbers = [3, 7, -1];

let min = numbers[0];
let max = numbers[0];

for (const number of numbers) {
  if (number < min) min = number;
  else if (number > max) max = number;
}
console.log(`MIN: ${min}`);
console.log(`MAX: ${max}`);
