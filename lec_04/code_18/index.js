const index = Math.floor(Math.random() * 5);
const grade = "ABCDF"[index];
console.log(grade);
switch (grade) {
  case "A":
    console.log(">= 90%");
    break;
  case "B":
    console.log(">= 80%");
    break;
  case "C":
    console.log(">= 70%");
    break;
  case "D":
    console.log(">= 60%");
    break;
  default:
    console.log("< 60%");
    break;
}
