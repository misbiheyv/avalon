import { Game } from '@/core/game';
import type { User } from '@/user';
import type { TRoomState, TGameMethodsParams, TGetLoyaltyData } from '@/core/game-manager/interface';
import { eventBus } from '@/helpers';

import { Server, IVisualGameState, IPlayer, IGameOptions, TVisibleRole } from '@avalon/types';

export * from '@/core/game-manager/interface';

export class GameManager {
  game: Game;
  roomState!: TRoomState;
  io: Server;
  roomID: string;

  constructor(users: User[], options: IGameOptions, io: Server, roomID: string) {
    this.roomID = roomID;
    this.io = io;
    this.game = new Game(users, options, { gameStateChanged: () => this.gameStateChanged() });
    this.initRoomState();
  }

  /**
   * Initializing the state room
   */
  initRoomState(): void {
    this.roomState = {
      uuid: this.roomID,
      stage: this.game.stage,
      vote: this.game.turn,
      mission: this.game.round,
      settings: this.game.settings,
      result: this.game.result,
      addonsData: this.game.addonsData,
      features: this.game.features,
      ...this.prepareHistoryAndPlayerForRoomState(),
    };
  }

  /**
   * Handler, the state of the game has changed, need to update the state of the room
   */
  gameStateChanged(): void {
    this.roomState.stage = this.game.stage;

    this.roomState = {
      ...this.roomState,
      ...this.prepareHistoryAndPlayerForRoomState(),
    };

    this.roomState.vote = this.game.turn;

    this.roomState.mission = this.game.round;

    this.roomState.result = this.game.result;

    if (this.game.result) {
      eventBus.emit('roomUpdated', this.roomID);
    }

    this.sendNewStateToUsers();
  }

  prepareHistoryAndPlayerForRoomState(): Pick<TRoomState, 'history' | 'players'> {
    return {
      history: this.game.history.map((el, index) => {
        if (this.game.features.hiddenHistory && this.game.stage !== 'end' && index !== this.game.history.length - 1) {
          const currentHistoryIndex = this.roomState.history.length;

          if (index < currentHistoryIndex && el.canBeHidden) {
            return () => ({ type: 'hidden' });
          }
        }

        return el.dataForManager.bind(el);
      }),
      players: this.game.players.map((player) => {
        return {
          id: player.user.id,
          index: player.index,
          name: player.user.name,
          features: player.features,
        };
      }),
    };
  }

  /**
   * Sends the new game state to all users
   */
  sendNewStateToUsers(): void {
    this.game.players.forEach((player) => {
      this.io.to(player.user.id).emit('gameUpdated', this.prepareStateForUser(player.user.id));
    });

    this.io
      .except(this.game.players.map((player) => player.user.id))
      .to(this.roomID)
      .emit('gameUpdated', this.prepareStateForUser());
  }

  /**
   * Transform a state of rooms into a state for a specific user
   *
   * @param [userID] - the ID of the user to prepare the state for
   */
  prepareStateForUser(userID?: string): IVisualGameState {
    return {
      result: this.roomState.result,
      uuid: this.roomState.uuid,
      stage: this.roomState.stage,
      vote: this.roomState.vote,
      mission: this.roomState.mission,
      settings: this.roomState.settings,
      addonsData: this.roomState.addonsData,
      features: this.roomState.features,
      history: this.roomState.history.map((el) => el({ game: this.game, userID })),
      players: this.roomState.players.map((player, index) => {
        const playerData: IPlayer = { ...player, role: this.getPlayerVisibleRole(player.id, userID) };

        if (player.id === userID) {
          playerData.validMissionsResult = this.game.players[index].role.validMissionResult;
        }

        return playerData;
      }),
    };
  }

  getPlayerVisibleRole(playerID: string, userID?: string): TVisibleRole {
    // Role known for all -> Role known for user -> Self Role -> Role known for role -> unknown
    let role: TVisibleRole | undefined = this.game.getVisibleRoleState('all', playerID);

    if (!role && userID && this.game.players.some((player) => player.user.id === userID)) {
      const user = this.game.findPlayerByID(userID);
      const player = this.game.findPlayerByID(playerID);

      if (this.game.getVisibleRoleState(userID, playerID)) {
        role = this.game.getVisibleRoleState(userID, playerID);
      } else if (playerID === userID) {
        role = player.role.selfRole;
      } else {
        role = user.role.visibility[player.role.role];
      }
    }

    role = role ?? 'unknown';

    return role;
  }

  callGameMethods(userID: string, params: TGameMethodsParams): void {
    switch (params.method) {
      case 'voteForMission':
        this.game.voteForMission(userID, params.option);
        break;

      case 'selectPlayer':
        this.game.selectPlayer(userID, params.playerID);
        break;

      case 'sentSelectedPlayers':
        this.game.sentSelectedPlayers(userID);
        break;

      case 'actionOnMission':
        this.game.actionOnMission(userID, params.result);
        break;

      case 'assassinate':
        if (!this.game.addons.assassin) {
          throw new Error('You cant assassinate in game without assassinate addon');
        }

        this.game.addons.assassin.assassinate(userID, params.type);
        break;

      case 'checkLoyalty':
        if (!this.game.addons.ladyOfLake) {
          throw new Error('You cant use lady of lake in game without lady addon');
        }

        this.game.addons.ladyOfLake.checkLoyalty(userID);
        break;

      case 'announceLoyalty':
        if (!this.game.addons.ladyOfLake) {
          throw new Error('You cant use lady of lake in game without lady addon');
        }

        this.game.addons.ladyOfLake.announceLoyalty(userID, params.loyalty);
        break;

      case 'giveExcalibur': {
        if (!this.game.addons.excalibur) {
          throw new Error('You cant give excalibur in game without excalibur');
        }

        this.game.addons.excalibur.giveExcalibur(userID);
        break;
      }

      case 'useExcalibur': {
        if (!this.game.addons.excalibur) {
          throw new Error('You cant use excalibur in game without excalibur');
        }

        this.game.addons.excalibur.useExcalibur(userID);
        break;
      }

      case 'witchAbility': {
        if (!this.game.addons.witch) {
          throw new Error('You cant use witch ability in game without witch');
        }

        this.game.addons.witch.useWitchAbility(userID, params.result);
        break;
      }
    }
  }

  getGameData<T extends TGetLoyaltyData>(userID: string, params: T['params']): T['result'] {
    switch (params.method) {
      case 'getLoyalty':
        if (!this.game.addons.ladyOfLake) {
          throw new Error('You cant use lady of lake in game without lady addon');
        }

        return this.game.addons.ladyOfLake.getLoyalty(userID);
    }
  }
}
