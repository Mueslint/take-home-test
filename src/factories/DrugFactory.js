import { Drug } from '../models/Drug';
import {
  HerbalTeaStrategy,
  MagicPillStrategy,
  FervexStrategy,
  DafalganStrategy,
  DefaultStrategy,
} from '../strategies';

const strategiesMap = {
  'Herbal Tea': HerbalTeaStrategy,
  'Fervex': FervexStrategy,
  'Magic Pill': MagicPillStrategy,
  'Dafalgan': DafalganStrategy,
};

const DEFAULT_STRATEGY = DefaultStrategy;

export class DrugFactory {
  static createDrug(name, expiresIn, benefit) {
    const Strategy = strategiesMap[name] || DEFAULT_STRATEGY;
    return new Drug(name, expiresIn, benefit, new Strategy());
  }
}
