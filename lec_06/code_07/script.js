const clickMe = () => {
  alert("Clicked!");
};

const btn = document.querySelector(".btn");
const input = document.querySelector("input");

btn.onclick = clickMe;
input.onkeypress = () => console.log("Press");
