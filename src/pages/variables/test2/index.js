const mondayMiles = 3.6;
const tuesdayMiles = 4.1;
const wednesdayMiles = 5.2;

//CHALLENGE: Define a constant named averageMiles to compute the average miles over the 3 days.
const averageMiles = (mondayMiles + tuesdayMiles + wednesdayMiles) / 3;

//CHALLENGE: Replace ... with a placeholder for the averageMiles constant.
console.log(`You ran an average of ${averageMiles} miles.`);

//NOTE: The variables need to be exported so the tests can check their values
module.exports = { mondayMiles, tuesdayMiles, wednesdayMiles, averageMiles };
