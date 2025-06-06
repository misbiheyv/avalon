import { IGameAddon, TAddonPriority } from '@/core/game/addons/interface';
import { of } from 'rxjs';
import { Game } from '@/core/game';

export class ClericAddon implements IGameAddon {
  addonName = 'cleric';
  game: Game;

  priority: TAddonPriority = {
    beforeEndMission: 'low',
  };

  constructor(game: Game) {
    this.game = game;
  }

  beforeEndMission() {
    if (this.game.round === 0) {
      const clericId = this.game.players.find((player) => player.role.role === 'cleric')!.userID;
      const leader = this.game.leader;

      if (clericId !== leader.userID) {
        this.game.updateVisibleRolesState(clericId, { [leader.userID]: leader.role.visibleLoyalty });
      }
    }

    return of(true);
  }
}
