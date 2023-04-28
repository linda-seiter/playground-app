const people = 3;
const pizzaSlices = 20;

//Math.floor rounds down to nearest integer
const slicesPerPerson = Math.floor(pizzaSlices / people);

//Modulo operator % computes the remainder after division
const leftoverSlices = pizzaSlices % people;

console.log(`${people} people are splitting ${pizzaSlices} slices of pizza.`);
console.log(`Each person gets ${slicesPerPerson} slices.`);
console.log(`There are ${leftoverSlices} slices leftover.`);
