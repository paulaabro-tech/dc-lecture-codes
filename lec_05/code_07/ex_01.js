// Escreva um programa onde, você chame uma função enviando um número, a
// função deve imprime na tela os número de 1 até o número que você enviou

const displayNumbers = num => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};

displayNumbers(5);
