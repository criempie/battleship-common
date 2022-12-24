import { CellState, Coordinates, PlayerInfo } from "./types";

export enum serverLobbyEvents {
  gameLog = "GAME_LOG",
  lobbyLog = "LOBBY_LOG",
}

export interface ServerJoinLobbyData {
  id: string;
  player?: Pick<PlayerInfo, "id" | "socketId">;
}

export interface ServerFireData {
  lobbyId: string;
  coords: Coordinates;
}

export interface ServerGameLogData {
  id: number;
  fromPlayer: string;
  toPlayer: string;
  target: Coordinates;
  result: CellState;
}

export enum LobbyLogTypes {
  playerJoin = "PLAYER_JOIN",
  playerRejoin = "PLAYER_REJOIN",
  playerLeave = "PLAYER_LEAVE",
}

export type ServerLobbyLogData = {
  id: number;
} & LobbyLogJoinPlayerData;

export interface LobbyLogJoinPlayerData {
  type:
    | LobbyLogTypes.playerJoin
    | LobbyLogTypes.playerRejoin
    | LobbyLogTypes.playerLeave;
  playerId: string;
}
