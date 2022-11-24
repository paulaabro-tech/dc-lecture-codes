const people = [
  { name: "Rodolfo", vip: true },
  { name: "Maria", vip: false },
  { name: "Jon", vip: true },
  { name: "Bea", vip: true },
  { name: "Carl", vip: false },
  { name: "Anna", vip: true },
  { name: "June", vip: false }
];

const vips = people.filter(person => person.vip);
console.log(vips);
console.log();

const students = [
  { name: "Rodolfo", score: 7 },
  { name: "Maria", score: 5 },
  { name: "Jon", score: 8 },
  { name: "Bea", score: 9 },
  { name: "Carl", score: 3 },
  { name: "Anna", score: 2 },
  { name: "June", score: 10 }
];
const passed = students.filter(({ score }) => score >= 7);
const failed = students.filter(({ score }) => score < 7);
console.log(passed);
console.log(failed);
