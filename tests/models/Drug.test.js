import { Drug } from "../../src/models/Drug";

describe("Drug", () => {
  test("Normal drug decreases benefit and expiresIn correctly", () => {
    const drug = new Drug("Doliprane", 10, 20);
    drug.update();
    expect(drug.expiresIn).toBe(9);
    expect(drug.benefit).toBe(19);
  });

  test("Normal drug degrades benefit twice as fast after expiration", () => {
    const drug = new Drug("Doliprane", 0, 10);
    drug.update();
    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(8);
  });
});
