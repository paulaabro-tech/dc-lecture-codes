const inputs = document.querySelectorAll("input");

inputs[0].onkeypress = event => console.log(event);
inputs[1].onkeypress = event => console.log(event.key);
inputs[2].onkeypress = event => console.log(event.target.value);
