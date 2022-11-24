// Escreva um programa onde, você cria uma função geradora de desconto. A função aceita 4 parâmetros
// (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou
// não, um booleando que diz se o cliente vai pagar a vista ou não)
// Os descontos funcionam da seguinte forma:
// - Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
// - Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000,
// e maior que R$ 500 => 25% de desconto
// - Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
// - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que
// R$ 1000 => 20% de desconto
// - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que
// R$ 1000, e maior que R$ 500 => 15% de desconto
// - Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
// - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
// - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que
// R$ 1000, e maior que R$ 500 => 15% de desconto
// - Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
// - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que
// R$ 1000 => 10% de desconto
// - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que
// R$ 1000, e maior que R$ 500 => 5% de desconto
// -Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor
// que R$ 500 => SEM DESCONTO
// A função deve imprimir na tela:
// Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor
// total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
// Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra,
// o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório
// entre 10 e 20% para a próxima compra.

const checkOut = (name, purchase, isNew, isCash) => {
  const isOver1000 = purchase >= 1000;
  const isOver500 = purchase >= 500;
  let discount = 0;
  if (isNew) discount += 10;
  if (isCash) discount += 10;
  if (isOver1000) discount += 10;
  else if (isOver500) discount += 5;

  const discountedPurchase = purchase * (1 - discount / 100);

  console.log(`Thanks, ${name} for purchasing with us!`);
  console.log(`Total was: $ ${purchase.toFixed(2)}`);
  if (discount != 0) {
    console.log(`With a discount of ${discount}%`);
    console.log(`Final cost: $ ${discountedPurchase.toFixed(2)}`);
  } else {
    const coupon = Math.floor(Math.random() * 11) + 10;
    console.log(`Here is your coupon for next purchase of ${coupon}%`);
  }
};

checkOut("Paula", 100, false, false);
console.log();

checkOut("Luna", 1000, true, false);
console.log();

checkOut("Charles", 600, true, true);
