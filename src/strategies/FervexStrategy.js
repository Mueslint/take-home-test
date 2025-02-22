/*
    This is the Fervex strategy.
    Fervex increases in benefit as its expiration date approaches.
    
    Benefit increases by 1 each day.
    It increases by 2 when there are 10 days or less.
    It increases by 3 when there are 5 days or less.
    Benefit is 0 after expiration.
*/

export class FervexStrategy {
  update(drug) {
    drug.expiresIn -= 1;
    if (drug.expiresIn < 0) {
      drug.benefit = 0;
    } else {
      let increment = 1;
      if (drug.expiresIn < 5) {
        increment = 3;
      } else if (drug.expiresIn < 10) {
        increment = 2;
      }
      drug.benefit = Math.min(50, drug.benefit + increment);
    }
  }
}
