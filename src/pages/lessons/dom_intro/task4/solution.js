const favoriteColor = "purple";
const message = document.getElementById("message");
message.style.color = "pink";
message.style.padding = "1em";
/*
CHALLENGE:
The code below does not change the background color because it is assigning
the property to a string "favoriteColor", which is not a real color.
Fix the error to assign the background style to the **value** stored in the variable
named favoriteColor.
HINT: get rid of the quotes.
*/
message.style.background = favoriteColor;
