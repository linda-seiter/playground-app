import {
  mondayMiles,
  tuesdayMiles,
  wednesdayMiles,
  averageMiles,
} from "./index.js";

describe("averageMiles", () => {
  it("is declared", () => {
    expect(averageMiles).toBeDefined();
  });

  it("is assigned the correct value", () => {
    expect(averageMiles).toBe(
      (mondayMiles + tuesdayMiles + wednesdayMiles) / 3
    );
  });
});
