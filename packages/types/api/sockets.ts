import type { TRoomState } from '../room';

import type { Server as SuperServer } from 'socket.io';
import type { Socket as SuperSocket } from 'socket.io-client';

export interface ServerToClientEvents {
  roomUpdated: (state: TRoomState) => void;
}

export interface ClientToServerEvents {
  createRoom: (callback: (uuid: string) => void) => void;
  joinRoom: (uuid: string, callback: (state: TRoomState) => void) => void;
  joinGame: (uuid: string) => void;
  leaveGame: (uuid: string) => void;
  leaveRoom: (uuid: string) => void;
}

export type Server = SuperServer<ClientToServerEvents, ServerToClientEvents>;
export type Socket = SuperSocket<ServerToClientEvents, ClientToServerEvents>;
