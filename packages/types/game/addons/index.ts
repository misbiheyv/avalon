import { prop } from '@typegoose/typegoose';

import type { TLadyOfLakeStages } from './lady-of-lake';
import type { LadyOfSeaAddonData } from './lady-of-sea';
import type { PlotCardsAddonData, TPlotCardsStages } from './plot-cards';
import type { TExcaliburStages } from './excalibur';
import type { TLancelotsStages } from './lancelots';
import type { TWitchStages } from './witch';
import type { TAssassinAddonStages } from './assassin';
import { AssassinAddonData } from './assassin';

export type { TAssassinateResult, TAssassinateType, AssassinAddonData, AssassinateProgressData } from './assassin';

export type {
  TUsableCardNames,
  TEffectsCardNames,
  TInstantCardNames,
  TPlotCardNames,
  PlotCardsAddonData,
  TActiveCardsStages,
  CardsState,
  ActiveCard,
} from './plot-cards';

/**
 * Possible addons stages
 */
export type TAddonsStages =
  | TLadyOfLakeStages
  | TExcaliburStages
  | TAssassinAddonStages
  | TLancelotsStages
  | TWitchStages
  | TPlotCardsStages;

/**
 * Player features added with addons
 */
export class AddonsFeatures {
  /**
   * A sign that the player has the Lady of the Lake ability or not
   */
  @prop()
  ladyOfLake?: 'has' | 'active' | 'used';

  /**
   * A sign that the player has the Lady of the sea ability or not
   */
  @prop()
  ladyOfSea?: 'has' | 'active' | 'used';

  /**
   * A sign that the player has the excalibur
   */
  @prop()
  excalibur?: 'has' | 'active';

  /**
   * True if player assassin
   */
  @prop()
  isAssassin?: boolean;

  /**
   * Active if player get witch loyalty
   */
  @prop()
  witchLoyalty?: 'active';
}

/**
 * Addons data
 */
export class AddonsData {
  @prop({ _id: false })
  public assassin?: AssassinAddonData;

  @prop({ _id: false })
  public ladyOfSea?: LadyOfSeaAddonData;

  @prop({ _id: false })
  public plotCards?: PlotCardsAddonData;
}

/**
 * Addons names
 */
export type TAddonsName = 'ladyOfLake' | 'excalibur' | 'ladyOfSea' | 'plotCards';
