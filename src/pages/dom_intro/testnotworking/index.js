document.getElementById("cityButton").addEventListener("click", styleCity);

function styleCity() {
  const cityP = document.getElementById("city"); //paragraph element
  cityP.style.background = "pink";
  cityP.style.color = "white";
  cityP.style.padding = "1em";
  cityP.style.border = "5px solid green";
}

export { styleCity };
