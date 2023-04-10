//import html from "./index.html?raw";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const htmlLower = html.toLowerCase();

it("has a DOCTYPE tag", () => {
  expect(html).toContain("<!DOCTYPE html>");
});

it("has opening and closing HTML tags", () => {
  expect(htmlLower).toContain("<html>");
  expect(htmlLower).toContain("</html>");
});

it("has opening and closing <head> and <body> tags", () => {
  expect(htmlLower).toContain("<head>");
  expect(htmlLower).toContain("</head>");
  expect(htmlLower).toContain("<body>");
  expect(htmlLower).toContain("</body>");
});

it("has valid nested structure <html><head>..</head><body>..</body></html>", () => {
  const regex =
    /(.*)<html>(.*)<head>(.*)<\/head>(.*)<body>(.*)<\/body>(.*)<\/html>/i;
  expect(htmlLower.replace(/\n*/g, "")).toMatch(regex);
});
