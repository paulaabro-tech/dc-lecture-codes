const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, number) => acc + number, 0);
const prod = numbers.reduce((acc, number) => acc * number, 1);
console.log(`SUM: ${sum}`);
console.log(`PRODUCT: ${prod}`);
