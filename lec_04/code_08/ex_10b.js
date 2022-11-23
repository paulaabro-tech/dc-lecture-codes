// Faça um programa que imprima na tela se um nome é igual ao outro
// nome digitado. Porém, os dois nomes devem estar em um objeto.
// Ex: const object1 = {firstName:"João", secondName:"Maria"}.
// João e João, imprime true. João e Maria, imprime false.

const names = { firstName: "Paula", secondName: "Paula", thirdName: "paula" };

const is1Equal2 = names.firstName === names.secondName;
const is1Equal3 = names.firstName === names.thirdName;

console.log(is1Equal2);
console.log(is1Equal3);
