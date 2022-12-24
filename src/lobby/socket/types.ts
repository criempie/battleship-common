// export type CellState1 = "hit" | "miss" | "ship" | "clear" | "destroy";
export enum CellState {
  hit = "hit",
  miss = "miss",
  ship = "ship",
  clear = "clear",
  destroy = "destroy",
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface HistoryLogAction {
  target: Coordinates;
}

export interface HistoryLogResult {
  state: CellState;
}

export interface HistoryLog {
  socketId: string;
  action: HistoryLogAction;
  result: HistoryLogResult;
}

export interface JoinLobbyData {
  id: string;
  player?: PlayerInfo;
}

export interface JoinLobbyReturn {
  lobbyId: string;
  player: PlayerInfo;
}

export interface PlayerInfo {
  id: string;
  socketId: string;
  field: CellState[][];
}

export interface TurnData {}

export interface FireData {
  lobbyId: string;
  coords: Coordinates;
}

export enum SocketErrorCodes {
  "NotYourTurn",
}

export interface SocketError {
  isError: true;
  message: string;
  code: SocketErrorCodes;
}

export type SocketFireAnswer =
  | { success: false }
  | {
      success: true;
      target: Coordinates;
      state: CellState;
      isYourTurn: boolean;
    }
  | (SocketError & { success: false });

export interface ServerEventGameLog {
  id: number;
  fromPlayer: string;
  toPlayer: string;
  target: Coordinates;
  result: CellState;
}
