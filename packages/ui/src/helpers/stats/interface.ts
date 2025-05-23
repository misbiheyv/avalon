import { TRoles } from '@avalon/types';

export type TUserStats<T extends TWinsStats = TWinsStatsWithWinrate> = {
  teams: {
    total: T;
    evil: T;
    good: T;
  };
  roles: {
    evil: {
      [key in TRoles]?: T;
    };
    good: {
      [key in TRoles]?: T;
    };
  };
};

export type TGameView = {
  role: TRoles;
  isWin: boolean;
  gameID: string;
};

export type TTeammateStats = {
  id: string;
  gamesCount: number;
  wins: number;
  lose: number;
  winrate: string;
};

export type TWinsStatsWithWinrate = {
  winrate: string;
} & TWinsStats;

export type TWinsStats = {
  total: number;
  wins: number;
  lose: number;
};
