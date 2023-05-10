import fs from "fs";
import path from "path";
import { createEventListener } from "./index.js";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf-8");

document.documentElement.innerHTML = html;
const style = document.createElement("style");
style.innerHTML = css;
document.head.append(style);

describe("query DOM", () => {
  it("has h1 with correct text", () => {
    const match = document.querySelectorAll("h1");
    expect(match.length).toBe(1);
    expect(match.item(0).innerHTML).toBe("Welcome!");
  });

  it("has two paragraphs with correct text", () => {
    const match = document.querySelectorAll("p");
    expect(match.length).toBe(2);
    expect(match.item(0).innerHTML).toBe("first paragraph");
    expect(match.item(1).innerHTML).toBe("second paragraph");
  });
});

describe("query css", () => {
  it('styles element with id "p2"', () => {
    const match = document.getElementById("p2");
    expect(match).not.toBe(null);
    const styles = window.getComputedStyle(match);
    expect(styles.color).toBe("yellow");
  });

  it('styles elements with class "highlight"', () => {
    const match = document.getElementsByClassName("highlight");
    expect(match.length).toBe(2);
    const styles = window.getComputedStyle(match[0]);
    expect(styles.background).toBe("black");
    expect(styles.color).toBe("white");
    expect(styles.padding).toBe("1em");
  });
});

describe("can test event listeners", () => {
  it("runs a console.log when clicked", () => {
    const logSpy = jest.spyOn(console, "log");
    createEventListener();
    const button = document.getElementById("click-me");
    button.click();
    expect(logSpy).toHaveBeenCalledWith("I was clicked!");
  });
});
