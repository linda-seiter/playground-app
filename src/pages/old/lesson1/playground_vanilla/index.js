import "./styles.css";

const city = document.getElementById("city"); //paragraph element
city.style.background = "pink";
city.style.padding = "1em";
city.style.border = "2px dashed gray";

console.log("city: " + city.textContent);

window.showStateName = function showStateName() {
  const state = document.getElementById("state"); //paragraph element
  state.textContent = "Massachusetts";
};

window.greet = function greet() {
  const name = document.getElementById("name"); //input element
  const hello = "Hello " + name.value;
  console.log(hello);
  const greeting = document.getElementById("greeting"); //paragraph element
  greeting.textContent = hello;
};

/*
let person = prompt("Please enter your name", "Harry Potter");
if (person != null) {
  console.log("hello " + person);
}

let age = parseInt(prompt("Please enter your age", 30));
age = age + 1;
console.log("next year you will turn " + age);
*/

const input = document.getElementById("button2");
input.addEventListener("click", showCountryName());

function showCountryName() {
  const country = document.getElementById("country"); //paragraph element
  country.textContent = "United States of America";
}
