import { DrugFactory } from "../../src/factories/DrugFactory";
import { HerbalTeaStrategy } from "../../src/strategies/HerbalTeaStrategy";

describe("DrugFactory", () => {
  test("Creates a normal drug when no special name is provided", () => {
    const drug = DrugFactory.createDrug("Doliprane", 10, 20);
    expect(drug.name).toBe("Doliprane");
    expect(drug.expiresIn).toBe(10);
    expect(drug.benefit).toBe(20);
  });

  test("Creates a Herbal Tea drug with the correct strategy", () => {
    const drug = DrugFactory.createDrug("Herbal Tea", 5, 10);
    expect(drug.name).toBe("Herbal Tea");
    expect(drug.expiresIn).toBe(5);
    expect(drug.benefit).toBe(10);
    expect(drug.updateStrategy).toBeInstanceOf(HerbalTeaStrategy);
  });

  test("Creates a Magic Pill that does not degrade", () => {
    const drug = DrugFactory.createDrug("Magic Pill", 15, 40);
    expect(drug.expiresIn).toBe(15);
    expect(drug.benefit).toBe(40);
  });
});
