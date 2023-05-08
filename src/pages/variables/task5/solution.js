//Declare a variable named "busRiders" whose value will change during program execution.
let busRiders = 0;
console.log(`Initially, there are ${busRiders} people on the bus.`);

//5 people get on the bus
busRiders += 5;
console.log(
  `5 people get on at stop#1. There are now ${busRiders} people on the bus.`
);

//3 people get off the bus
busRiders -= 3;
console.log(
  `3 people get off at stop#2. There are now ${busRiders} people on the bus.`
);

//CHALLENGE: Add more bus stops.  Use compound operators += and -=.

//4 people get on the bus
busRiders += 4;
console.log(
  `4 people get on at stop#3. There are now ${busRiders} people on the bus.`
);

//2 people get off the bus
busRiders -= 2;
console.log(
  `2 people get off at stop#4. There are now ${busRiders} people on the bus.`
);
