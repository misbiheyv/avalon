import type {
  IPlayer,
  TVisibleRole,
  IVisualGameState,
  Dictionary,
  TVoteOption,
  TMissionResult,
  TLoyalty,
} from '@avalon/types';

export type TRoomState = Omit<IVisualGameState, 'players'> & {
  players: Pick<IPlayer, 'features' | 'id' | 'name'>[];
  roles: Dictionary<TVisibleRole[]>;
  publicRoles: TVisibleRole[];
};

export type TGameMethodsParams =
  | TSelectPlayerParams
  | TVoteParams
  | TSentPlayersParams
  | TActionOnMissionParams
  | TSelectMerlinParams
  | TCheckLoyaltyParams
  | TAnnounceLoyaltyParams;

export type TSelectPlayerParams = {
  method: 'selectPlayer';
  playerID: string;
};

export type TVoteParams = {
  method: 'voteForMission';
  option: TVoteOption;
};

export type TSentPlayersParams = {
  method: 'sentSelectedPlayers';
};

export type TActionOnMissionParams = {
  method: 'actionOnMission';
  result: TMissionResult;
};

export type TSelectMerlinParams = {
  method: 'selectMerlin';
};

export type TCheckLoyaltyParams = {
  method: 'checkLoyalty';
};

export type TAnnounceLoyaltyParams = {
  method: 'announceLoyalty';
  loyalty: TLoyalty;
};
