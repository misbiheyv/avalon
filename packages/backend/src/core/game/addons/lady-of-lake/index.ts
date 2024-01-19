import * as _ from 'lodash';

import { IGameAddon } from '@/core/game/addons/interface';
import { CheckLoyalty } from '@/core/game/addons/lady-of-lake/check-loyalty';
import { Game } from '@/core/game';
import { TGameStage, TLoyalty } from '@avalon/types';

export class LadyOfLakeAddon implements IGameAddon {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  afterInitialization() {
    // On check loyalty user with lady of lake can select players
    this.game.selectAvailable.checkLoyalty = (player) => player.features.ladyOfLake === 'has';

    let lastPlayer = this.game.leader;
    while (lastPlayer.next !== this.game.leader) {
      lastPlayer = lastPlayer.next;
    }

    // Right player from leader get ladyOfLake
    lastPlayer.features.ladyOfLake = 'has';

    return true;
  }

  beforeSelectTeam(prevStage: TGameStage) {
    if (this.game.round >= 2 && prevStage !== 'announceLoyalty') {
      this.game.updateStage('checkLoyalty');
      this.game.stateObserver.gameStateChanged();
      return false;
    }

    return true;
  }

  checkLoyalty(executorID: string) {
    if (this.game.stage !== 'checkLoyalty') {
      throw new Error(`You cant check loyalty on stage ${this.game.stage}`);
    }

    const ownerOfLady = this.game.players.find((player) => player.features.ladyOfLake === 'has')!;

    if (ownerOfLady.user.id !== executorID) {
      throw new Error('Only owner of lady of the lake can check loyalty');
    }

    if (this.game.selectedPlayers.length !== 1) {
      throw new Error('Only one player can be selected check loyalty');
    }

    const selectedPlayer = this.game.selectedPlayers[0];

    if (selectedPlayer.features.ladyOfLake !== undefined) {
      throw new Error("You can't use the lady of the lake on the previous owner or yourself");
    }

    this.game.history.push(new CheckLoyalty(ownerOfLady, selectedPlayer));
    this.game.updateStage('announceLoyalty');

    this.game.stateObserver.gameStateChanged();
  }

  announceLoyalty(executorID: string, loyalty: TLoyalty) {
    if (this.game.stage !== 'announceLoyalty') {
      throw new Error(`You cant announce loyalty on stage ${this.game.stage}`);
    }

    const ownerOfLady = this.game.players.find((player) => player.features.ladyOfLake === 'has')!;

    if (ownerOfLady.user.id !== executorID) {
      throw new Error('Only owner of lady of the lake can announce loyalty');
    }

    const lastHistoryElement = _.last(this.game.history);

    if (lastHistoryElement?.type !== 'checkLoyalty') {
      throw new Error('Something went wrong last action is not check loyalty');
    }

    (<CheckLoyalty>lastHistoryElement).announceLoyalty(loyalty);

    const selectedPlayer = this.game.selectedPlayers[0];

    ownerOfLady.features.ladyOfLake = 'used';
    selectedPlayer.features.ladyOfLake = 'has';
    selectedPlayer.features.isSelected = false;

    this.game.updateStage('selectTeam');

    this.game.stateObserver.gameStateChanged();
  }
}
