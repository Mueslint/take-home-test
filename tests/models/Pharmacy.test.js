import { Drug } from '../../src/models/Drug';
import { Pharmacy } from '../../src/models/Pharmacy';

describe('Pharmacy', () => {
  test('Pharmacy updates all drugs correctly', () => {
    const drugs = [
      new Drug('Doliprane', 10, 20),
      new Drug('Herbal Tea', 5, 10),
      new Drug('Magic Pill', 15, 40),
      new Drug('Fervex', 10, 30),
      new Drug('Dafalgan', 7, 30),
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
