import { Player } from "../../classes/Player";
import { CellState, PlayerInfo } from "./types";

export enum clientLobbyEvents {
  joinLobby = "JOIN_LOBBY",
  fire = "FIRE",
}

export interface ClientJoinLobbyData {
  id: string;
  player: PlayerInfo;
  otherPlayers: Omit<PlayerInfo, "socketId">[];
}

export type ClientFireData =
  | {
      success: true;
    }
  | {
      success: false;
      reason?: string;
    };
