const people = 3;
const pizzaSlices = 16;

//Math.floor rounds down to nearest integer
const slicesPerPerson = Math.floor(pizzaSlices / people);

//Modulo operator % computes the remainder after division
const leftoverSlices = pizzaSlices % people;

console.log("#people: " + people);
console.log("#slices: " + pizzaSlices);
console.log("slices per person: " + slicesPerPerson);
console.log("leftover slices: " + leftoverSlices);
