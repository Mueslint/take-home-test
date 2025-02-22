import { DefaultStrategy } from "../../src/strategies/DefaultStrategy";
import { Drug } from "../../src/models/Drug";

describe("DefaultStrategy", () => {
  test("Normal drug decreases benefit by 1 per day", () => {
    const drug = new Drug("Doliprane", 10, 20, new DefaultStrategy());
    drug.update();
    expect(drug.benefit).toBe(19);
  });

  test("Normal drug degrades twice as fast after expiration", () => {
    const drug = new Drug("Doliprane", 0, 10, new DefaultStrategy());
    drug.update();
    expect(drug.benefit).toBe(8);
  });
});
