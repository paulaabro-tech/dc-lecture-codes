const clickMe = () => alert("Clicked!");

const button = document.querySelector("button");
const select = document.querySelector("select");
const input = document.querySelector("input");

input.addEventListener("focus", () => console.log("Focusing..."));
select.addEventListener("change", () => console.log(select.value));
button.addEventListener("click", clickMe);
