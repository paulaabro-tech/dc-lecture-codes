const calculator = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;

    default:
      result = "Unsupported Operator!";
      break;
  }
  return result;
};

console.log(calculator(7, 3, "+"));
console.log(calculator(7, 3, "-"));
console.log(calculator(7, 3, "*"));
console.log(calculator(7, 3.5, "/"));
console.log(calculator(7, 3, "%"));
