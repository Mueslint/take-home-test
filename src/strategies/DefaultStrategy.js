/*
    This is the default strategy for updating the benefit and expiresIn values of any drug.
    It decreases the benefit by 1 and expiresIn by 1.
    If the drug is expired, the benefit is decreased by 2 instead of 1.
*/

export class DefaultStrategy {
  update(drug) {
    drug.expiresIn -= 1;
    const decrement = drug.expiresIn >= 0 ? 1 : 2;
    drug.benefit = Math.max(0, drug.benefit - decrement);
  }
}
