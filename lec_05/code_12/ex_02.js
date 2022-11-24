const people = [
  { name: "Rodolfo", score: 7 },
  { name: "Maria", score: 5 },
  { name: "Jon", score: 8 },
  { name: "Bea", score: 9 },
  { name: "Carl", score: 3 },
  { name: "Anna", score: 2 },
  { name: "June", score: 10 }
];

console.log(people.map(({ name, score }) => ({ name, result: score >= 7 ? "PASS" : "FAIL" })));
