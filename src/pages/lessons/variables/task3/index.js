//Initialize the number of people and the cost of the restaurant bill.
const people = 5;
const bill = 45;

//Calculate the cost per person.
const costPerPerson = bill / people;

/*
NOTE: 
${bill} displays the value in the variable named "bill", i.e. 45.
$${bill} adds a dollar sign $ before the value, i.e. $45.
*/
console.log(`${people} people need to split a $${bill} restaurant bill.`);
console.log(`The cost per person is $${costPerPerson}.`);
