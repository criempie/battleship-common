import { CellState } from "../lobby/socket/types";

export class Cell {
  public state: CellState = CellState.clear;

  // public readonly x: number;
  // public readonly y: number;

  // constructor({ x, y }: Coordinates) {
  //   this.x = x;
  //   this.y = y;
  // }

  // constructor() {
  //   this.state = CellState.clear;
  // }

  fire() {
    switch (this.state) {
      case CellState.clear: {
        this.state = CellState.miss;
        return CellState.miss;
      }
      case CellState.ship: {
        this.state = CellState.hit;
        return CellState.hit;
      }
      default: {
        return false;
      }
    }
  }
}
