import { prop } from '@typegoose/typegoose';

import { MissionSettings } from './mission';
import type { TGoodRoles, TEvilRoles } from './roles';

export class PlayersSettings {
  @prop({ required: true })
  evil!: number;

  @prop({ required: true })
  good!: number;
}

export class GameRoles {
  @prop({ required: true, type: () => [String] })
  evil!: TEvilRoles[];

  @prop({ required: true, type: () => [String] })
  good!: TGoodRoles[];
}

export class GameSettings {
  @prop({ required: true, type: () => [MissionSettings], _id: false })
  missions!: MissionSettings[];

  @prop({ required: true, _id: false })
  players!: PlayersSettings;

  @prop({ required: true })
  total!: number;
}

export class GameSettingsWithRoles extends GameSettings {
  @prop({ required: true, _id: false })
  roles!: GameRoles;
}
