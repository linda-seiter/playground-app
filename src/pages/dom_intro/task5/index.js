/*
CHALLENGE: Assign the constant named favoriteColor to the text contained within the
span element.  (HINT: Replace the string "red" with a call to the document.querySelector function.
Don't forget to get the text content between the span tags.)
*/
const favoriteColor = "red";
const message = document.getElementById("message");
message.style.color = "pink";
message.style.padding = "1em";
message.style.background = favoriteColor;

/*
CHALLENGE: Change the message text to display "I like ... too!",
replacing ... with the value stored in the constant named "favoriteColor".
*/
