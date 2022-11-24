const students = ["Paula", "Anna", "Chuck", "Drake", "Bea", "Luna"];

console.log(students.splice(1, 2));
console.log(students);

students.splice(1, 0, "Anna");
console.log(students);

students.splice(2, 1, "Chuck");
console.log(students);

students.splice(2, 3, "Other");
console.log(students);

students.splice(2, 1, "Chuck", "Drake", "Bea", "Luna");
console.log(students);
console.log();

console.log(students.slice(1));
console.log(students.slice(1, 2));
console.log(students.slice(1, 3));
console.log(students.slice(1));
console.log();

console.log(students);
console.log(students.pop());
console.log(students);
console.log(students.shift());
console.log(students);
