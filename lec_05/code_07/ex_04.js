// Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

const getYear = () => {
  const year = new Date().getFullYear();
  console.log(`The year is: ${year}`);
};

getYear();
