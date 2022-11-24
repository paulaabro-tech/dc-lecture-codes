// Faça um programa onde leia um numero e diga se ele é par ou impar.

const number = Math.floor(Math.random() * 2);

if (number % 2 === 0) console.log(`${number} is EVEN!`);
else console.log(`${number} is ODD!`);
