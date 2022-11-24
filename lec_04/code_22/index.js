const student = {
  name: "Paula",
  age: 26,
  genre: "female"
};

for (const property in student) {
  console.log(`${property}: ${student[property]}`);
}
