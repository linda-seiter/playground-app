/*
R0 (pronounced r-naught) is the rate of infection for a given disease.
Measles has an R0 of 12-18, which means each infected person may spread the disease to 12-18
others in a totally susceptible population.
*/

//A variable declared with keyword "let" can be reassigned to a new value.
let infected = 1;

console.log("Measles has an R0 of 12");

//Week#1
infected = infected * 12;
console.log(`Week 1: ${infected} people are infected with measles.`);

//Week#2
infected = infected * 12;
console.log(`Week 2: ${infected} people are infected with measles.`);

//Week#3
infected = infected * 12;
console.log(`Week 3: ${infected} people are infected with measles.`);
