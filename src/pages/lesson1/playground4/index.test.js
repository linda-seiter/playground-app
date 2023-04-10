import { sum, isEven } from "./index.js";

it("sum(1,2)", function () {
  expect(sum(1, 2)).toBe(3);
});

it("sum(5, 7)", function () {
  expect(sum(5, 7)).toBe(12);
});

it("isEven(6)", function () {
  expect(isEven(6)).toBe(true);
});

it("isEven(7)", function () {
  expect(isEven(7)).toBe(false);
});
