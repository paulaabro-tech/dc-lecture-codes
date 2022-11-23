// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
// Porém, os dois nomes devem estar em dois objetos separados.
// Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}.
// João e João, imprime true. João e Maria, imprime false.Faça

const person1 = { name: "Paula" };
const person2 = { name: "Paula" };
const person3 = { name: "paula" };

const is1Equal2 = person1.name === person2.name;
const is1Equal3 = person1.name === person3.name;

console.log(is1Equal2);
console.log(is1Equal3);
