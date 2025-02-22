/*
    This is the Dafalgan strategy.
    Dafalgan decreases in benefit twice as fast as normal drugs.
*/

export class DafalganStrategy {
  update(drug) {
    drug.expiresIn -= 1;
    const decrement = drug.expiresIn >= 0 ? 2 : 4;
    drug.benefit = Math.max(0, drug.benefit - decrement);
  }
}
