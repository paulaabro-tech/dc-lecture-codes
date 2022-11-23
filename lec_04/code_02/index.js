const firstString = "This is a STRING";

// prettier-ignore
const secondString = 'This is a STRING';
const thirdString = `This is a TEMPLATE STRING`;

console.log(firstString);
console.log(secondString);
console.log(thirdString);
console.log();

const text1 = 'J. Doe said: "I love JS!"';
const text2 = "J. Doe said: 'I love JS!'";

console.log(text1);
console.log(text2);
console.log();

const name = "Paula";
const age = 26;
const textWithSuperPowers = `
Hello, ${name}!
Your Username is: ${name.toLowerCase()}${age}`;
console.log(textWithSuperPowers);
console.log();

console.log(`10 + 20 * 4 = ${10 + 20 * 4}`);
