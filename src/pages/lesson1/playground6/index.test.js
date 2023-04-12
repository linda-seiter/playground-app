import { sum, isEven } from "./index.js";

describe("sum(a, b) function", function () {
  it("sum(1,2) returns 3", function () {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("isEven(n) function", function () {
  it("isEven(1) returns false", function () {
    expect(isEven(1)).toBe(false);
  });
  it("isEven(2) returns true", function () {
    expect(isEven(1)).toBe(true);
  });
});
