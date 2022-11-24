const students = ["Paula", "Anna"];

console.log(students);

students.push("Chuck");
console.log(students);

students.push("Drake");
console.log(students);
console.log();

console.log(`Size of students is: ${students.length}`);
console.log();

console.log(students.sort());
console.log();

delete students[0];
console.log(students);
console.log(students[0]);
