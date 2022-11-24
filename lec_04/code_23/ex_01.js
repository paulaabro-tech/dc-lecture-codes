// Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"

const number = Math.floor(Math.random() * 3) + 9;

if (number > 10) console.log(`${number} > 10`);
else if (number === 10) console.log(`${number} === 10`);
else console.log(`${number} < 10`);
