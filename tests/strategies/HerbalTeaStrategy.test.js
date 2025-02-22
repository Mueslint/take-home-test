import { HerbalTeaStrategy } from '../../src/strategies/HerbalTeaStrategy';
import { Drug } from '../../src/models/Drug';

describe('HerbalTeaStrategy', () => {
  test('Herbal Tea increases benefit as it ages', () => {
    const drug = new Drug('Herbal Tea', 5, 10, new HerbalTeaStrategy());
    drug.update();
    expect(drug.benefit).toBe(11);
    expect(drug.expiresIn).toBe(4);
  });

  test('Herbal Tea increases benefit twice as fast after expiration', () => {
    const drug = new Drug('Herbal Tea', 0, 10, new HerbalTeaStrategy());
    drug.update();
    expect(drug.benefit).toBe(12);
    expect(drug.expiresIn).toBe(-1);
  });

  test('Herbal Tea benefit never exceeds 50', () => {
    const drug = new Drug('Herbal Tea', 5, 50, new HerbalTeaStrategy());
    drug.update();
    expect(drug.benefit).toBe(50);
  });
});
