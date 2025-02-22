/*
    This is the Herbal Tea strategy.
    Benefit increases by 1 each day, and it increases by 2 after expiration.
    Still has the benefit's hard cap of 50.
*/

export class HerbalTeaStrategy {
  update(drug) {
    drug.expiresIn -= 1;
    const increment = drug.expiresIn >= 0 ? 1 : 2;
    drug.benefit = Math.min(50, drug.benefit + increment);
  }
}
