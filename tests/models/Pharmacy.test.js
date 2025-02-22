import { Pharmacy } from '../../src/models/pharmacy';
import { DrugFactory } from '../../src/factories/DrugFactory';

describe('Pharmacy', () => {
  test('Pharmacy updates all drugs correctly', () => {
    const drugs = [
      DrugFactory.createDrug('Doliprane', 10, 20),
      DrugFactory.createDrug('Herbal Tea', 5, 10),
      DrugFactory.createDrug('Magic Pill', 15, 40),
      DrugFactory.createDrug('Fervex', 10, 30),
      DrugFactory.createDrug('Dafalgan', 7, 30),
    ];

    const pharmacy = new Pharmacy(drugs);
    pharmacy.updateBenefitValue();

    // Normal drug
    expect(drugs[0].expiresIn).toBe(9);
    expect(drugs[0].benefit).toBe(19);

    // Herbal Tea increases in benefit
    expect(drugs[1].benefit).toBe(11);

    // Magic Pill remains unchanged
    expect(drugs[2].benefit).toBe(40);

    // Fervex increases faster
    expect(drugs[3].benefit).toBe(32);

    // Dafalgan degrades faster
    expect(drugs[4].benefit).toBe(28);
  });
});
