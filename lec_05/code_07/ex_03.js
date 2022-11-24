// Escreva um programa onde, você chame uma função, e ela diga a hora exata!

const getTime = () => {
  const time = new Date().toTimeString();
  console.log(`Now is: ${time}`);
};

getTime();
