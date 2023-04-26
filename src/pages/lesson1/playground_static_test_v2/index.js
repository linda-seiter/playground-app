/* Fix the functions so the tests pass */

function sum(a, b) {
  return a - b;
}

function isEven(n) {
  return n / 2 === 0;
}

function logShout(string) {
  console.log(string);
}

function showStateName() {
  const state = document.getElementById("state"); //paragraph element
  state.textContent = "Massachusetts";
}

export { sum, isEven, logShout, showStateName };
