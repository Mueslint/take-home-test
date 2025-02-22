import { Drug } from '../models/Drug';
import {
  HerbalTeaStrategy,
  MagicPillStrategy,
  FervexStrategy,
  DafalganStrategy,
  DefaultStrategy,
} from '../strategies';

export class DrugFactory {
  static createDrug(name, expiresIn, benefit) {
    let strategy;

    switch (name) {
      case 'Herbal Tea':
        strategy = new HerbalTeaStrategy();
        break;
      case 'Magic Pill':
        strategy = new MagicPillStrategy();
        break;
      case 'Fervex':
        strategy = new FervexStrategy();
        break;
      case 'Dafalgan':
        strategy = new DafalganStrategy();
        break;
      default:
        strategy = new DefaultStrategy();
    }

    return new Drug(name, expiresIn, benefit, strategy);
  }
}
