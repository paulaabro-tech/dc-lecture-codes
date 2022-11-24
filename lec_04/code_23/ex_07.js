// Faça um programa onde leia um número e diga se ele é:
// - ímpar,
// - par,
// - é um número primo e impar,
// - é par e divisível por 5.

const number = Math.floor(Math.random() * 101);
console.log(`NUMBER: ${number}`);
if (number % 10 === 0) console.log("Even and divisible by 5");
else if (number % 2 === 0) console.log("Even");
else {
  let isPrime = true;
  for (let i = 3; i <= number / 2; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) console.log("Prime and Odd");
  else console.log("Odd");
}
