import { sum, isEven, logShout } from "./index.js";

describe("sum(a, b)", function () {
  it("sum(1,2)", function () {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("isEven(n)", function () {
  it("isEven(1)", function () {
    expect(isEven(1)).toBe(false);
  });
  it("isEven(2)", function () {
    expect(isEven(2)).toBe(true);
  });
});

/*
describe("logShout(string)", function () {
  it("logShout('hello')", function () {
    const logSpy = jest.spyOn(console, "log");

    logShout("hello");

    expect(logSpy).toHaveBeenCalledWith("HELLO");

    logSpy.mockRestore();
  });
});
*/
