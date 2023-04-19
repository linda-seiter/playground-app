/* Fix the functions so the tests pass */

function sum(a, b) {
  return a - b;
}

function isEven(n) {
  return n / 2 === 0;
}

function logShout(str) {
  console.log(str);
}

export { sum, isEven, logShout };
