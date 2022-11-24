// Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente:
// - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES
// - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES.
// Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

const numbers = [
  Math.floor(Math.random() * 2),
  Math.floor(Math.random() * 2),
  Math.floor(Math.random() * 2),
  Math.floor(Math.random() * 2)
];

let evenCount = 0;
let oddCount = 0;
for (const number of numbers) {
  if (number % 2 === 0) evenCount++;
  else oddCount++;
}

console.log(numbers);

if (evenCount === numbers.length) console.log("All EVENS!");
else if (oddCount === numbers.length) console.log("All ODDS!");
else console.log("Mixed Evens and Odds!");
