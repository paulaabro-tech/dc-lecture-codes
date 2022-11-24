function displaySum(num1, num2) {
  console.log(num1 + num2);
}

function sum(num1, num2) {
  return num1 + num2;
  console.log("Never gets here 😭");
}

console.log(`The result is: ${displaySum(3, 7)}`);
console.log(`The result is: ${sum(3, 7)}`);
