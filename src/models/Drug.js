import { DefaultStrategy } from "../strategies/DefaultStrategy";

export class Drug {
  constructor(
    name,
    expiresIn,
    benefit,
    updateStrategy = new DefaultStrategy(),
  ) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.updateStrategy = updateStrategy;
  }

  update() {
    this.updateStrategy.update(this);
  }
}
