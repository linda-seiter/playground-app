//npm install prompt-sync
//var prompt = require("prompt-sync")();
import promptSync from "prompt-sync";
const prompt = promptSync();

function isEven(num) {
  return num % 2 == 0;
}

const num = prompt("Enter a number: ");

if (isEven(num)) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}
