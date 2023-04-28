const cityP = document.getElementById("city"); //The paragraph element with id="city".
const cityText = cityP.textContent; //The text between start and end tags of the paragraph.

const stateP = document.getElementById("state"); //The paragraph element with id="state".
const stateText = stateP.textContent; //The text between start and end tags of the paragraph.

const welcome = document.getElementById("welcome"); //The paragraph element

//Assign textContent property (text between start and end tag) to a new value
welcome.textContent = `Welcome to ${cityText}, ${stateText}.`;
