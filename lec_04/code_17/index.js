const score = Math.floor(Math.random() * 101);

let grade;
if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else if (score >= 60) grade = "D";
else grade = "F";

console.log(`SCORE: ${score} & GRADE: ${grade}`);
