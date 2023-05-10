function createEventListener() {
  const button = document.getElementById("click-me");
  button.addEventListener("click", () => {
    console.log("I was clicked!");
    const h2 = document.createElement("h2");
    h2.textContent = "second-header";
    document.body.append(h2);
  });
}

export { createEventListener };
