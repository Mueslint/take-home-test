import { MagicPillStrategy } from "../../src/strategies/MagicPillStrategy";
import { Drug } from "../../src/models/Drug";

describe("MagicPillStrategy", () => {
  test("Magic Pill never changes", () => {
    const drug = new Drug("Magic Pill", 15, 40, new MagicPillStrategy());
    drug.update();
    expect(drug.benefit).toBe(40);
    expect(drug.expiresIn).toBe(15);
  });
});
