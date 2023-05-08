//Select the body element using querySelector
const body = document.querySelector("body");
body.style.background = "gray";
body.style.color = "white";

//Select a specific element by id using getElementById
const heading = document.getElementById("languageHeading");
heading.style.background = "red";
heading.style.color = "white";
heading.style.padding = "1em";
heading.style.border = "2px solid white";
heading.style.textAlign = "center";

const jsListItem = document.getElementById("js");
jsListItem.style.fontStyle = "italic";
jsListItem.style.fontWeight = "bold";

/*
CHALLENGE: 
Declare a constant named "noteParagraph" and assign it to the element
 with id="note" using the document.getElementById function.
Style the paragraph with an white background, black text color,
 bold font, 0.5em padding, and 5px dotted red border.
*/
