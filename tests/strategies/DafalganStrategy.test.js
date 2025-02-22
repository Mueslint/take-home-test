import { DafalganStrategy } from "../../src/strategies/DafalganStrategy";
import { Drug } from "../../src/models/Drug";

describe("DafalganStrategy", () => {
  test("Dafalgan degrades twice as fast as normal drugs", () => {
    const drug = new Drug("Dafalgan", 10, 20, new DafalganStrategy());
    drug.update();
    expect(drug.benefit).toBe(18);
  });

  test("Dafalgan degrades four times as fast after expiration", () => {
    const drug = new Drug("Dafalgan", 0, 10, new DafalganStrategy());
    drug.update();
    expect(drug.benefit).toBe(6);
  });
});
