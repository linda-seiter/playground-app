import { sum, isEven } from "./index.js";

describe("sum(a, b) function", function () {
  it("Takes two arguments and returns the sum", function () {
    expect(sum(1, 2)).toBe(3);
    expect(sum(5, 7)).toBe(12);
    expect(sum(-2, 6.5)).toBe(4.5);
  });
});

describe("isEven(n) function", function () {
  it("Takes one argument and returns true if it is an even number", function () {
    expect(isEven(6)).toBe(true);
    expect(isEven(9)).toBe(false);
    expect(isEven(0)).toBe(true);
  });
});
