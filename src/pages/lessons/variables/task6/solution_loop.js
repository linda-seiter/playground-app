/*
R0 (pronounced r-naught) is the rate of infection for a given disease.
Measles has an R0 of 12-18, which means each infected person may spread the disease to 12-18
others in a totally susceptible population.
Original covid R0 was between 2-5, delta 6-7, omicron 8-10.
*/

//A constant declared with keyword "const" can't be reassigned to a new value.
const disease = "Covid Omicron";
const r0 = 8;

//A variable declared with keyword "let" can be reassigned to a new value.
let infected = 1;

console.log(`${disease} has an R0 of ${r0}.`);

//Use a loop to repeat the calculation
for (let week = 1; week <= 5; week++) {
  infected *= r0;
  console.log(`Week ${week}: ${infected} people are infected with ${disease}.`);
}
