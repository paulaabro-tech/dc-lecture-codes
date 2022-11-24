const condition = Math.random() < 0.5;

if (condition) {
  console.log("I'm here!");
}

console.log("Goodbye!!!");
console.log();

const age = Math.floor(Math.random() * 11) + 10;

console.log(`AGE: ${age}`);
if (age >= 16) {
  console.log("You can drive!");
} else {
  console.log("You can NOT drive!");
}
