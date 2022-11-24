// Faça um programa onde os jurados vão dar a explicação para cada nota dada.
// São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const score = Math.floor(Math.random() * 11);
console.log(`SCORE: ${score}`);
switch (score) {
  case 0:
    console.log("The WORST");
    break;
  case 1:
    console.log("Almost WORST");
    break;
  case 2:
    console.log("Really BAD");
    break;
  case 3:
    console.log("BAD");
    break;
  case 4:
    console.log("Not BAD");
    break;
  case 5:
    console.log("NEUTRAL");
    break;
  case 6:
    console.log("Almost GOOD");
    break;
  case 0:
    console.log("GOOD");
    break;
  case 8:
    console.log("Really GOOD");
    break;
  case 9:
    console.log("AWESOME");
    break;

  default:
    console.log("AMAZING!");
    break;
}
