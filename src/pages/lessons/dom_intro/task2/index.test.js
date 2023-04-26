import fs from "fs";
import path from "path";

describe("index.js", function () {
  it("city paragraph style", () => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "./index.html"),
      "utf8"
    );
    window.document.body.innerHTML = html.toLowerCase();
    require("./index.js");

    const cityButton = document.getElementById("cityButton");
    cityButton.click();
    const cityP = document.getElementById("city");
    expect(cityP.style.background).toBe("pink");
  });
});
