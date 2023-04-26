const numHorses = 3;
const numApples = 17;
const applesPerHorse = Math.floor(numApples / numHorses);
const leftoverApples = numApples % numHorses;

console.log(numHorses + " horses");
console.log(numApples + " apples");
console.log("Apples per horse:" + applesPerHorse);
console.log("Leftover apples:" + leftoverApples);
