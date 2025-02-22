import { FervexStrategy } from "../../src/strategies/FervexStrategy";
import { Drug } from "../../src/models/Drug";

describe("FervexStrategy", () => {
  test("Fervex increases by 1 when more than 10 days remain", () => {
    const drug = new Drug("Fervex", 11, 20, new FervexStrategy());
    drug.update();
    expect(drug.benefit).toBe(21);
  });

  test("Fervex increases by 2 when 10 days or less remain", () => {
    const drug = new Drug("Fervex", 10, 20, new FervexStrategy());
    drug.update();
    expect(drug.benefit).toBe(22);
  });

  test("Fervex increases by 3 when 5 days or less remain", () => {
    const drug = new Drug("Fervex", 5, 20, new FervexStrategy());
    drug.update();
    expect(drug.benefit).toBe(23);
  });

  test("Fervex benefit drops to 0 after expiration", () => {
    const drug = new Drug("Fervex", 0, 20, new FervexStrategy());
    drug.update();
    expect(drug.benefit).toBe(0);
  });
});
