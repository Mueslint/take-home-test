import {
  DefaultStrategy,
  HerbalTeaStrategy,
  MagicPillStrategy,
  FervexStrategy,
  DafalganStrategy,
} from '../strategies';

const strategiesMap = {
  'Herbal Tea': HerbalTeaStrategy,
  Fervex: FervexStrategy,
  'Magic Pill': MagicPillStrategy,
  Dafalgan: DafalganStrategy,
};
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.updateStrategy = this.getStrategy(name);
  }

  getStrategy(name) {
    const UpdateStrategy = strategiesMap[name] || DefaultStrategy;
    return new UpdateStrategy();
  }

  update() {
    this.updateStrategy.update(this);
  }
}
