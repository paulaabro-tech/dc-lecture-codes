// Faça um programa onde entramos com dois números, e ele imprime se o
//  primeiro número é maior que o segundo. Ex: 2 e 5. Imprime: false.

const rand1 = Math.floor(Math.random() * 10);
const rand2 = Math.floor(Math.random() * 10);

const is1GreaterThan2 = rand1 > rand2;
console.log(`${rand1} > ${rand2} is ${is1GreaterThan2}`);
