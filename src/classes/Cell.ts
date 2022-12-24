import { CellState, Coordinates } from "../lobby/socket/types";

export class Cell {
  protected _state: CellState;

  public readonly x: number;
  public readonly y: number;

  public set state(state: CellState) {
    this._state = state;
  }

  public get state() {
    return this._state;
  }

  constructor();
  constructor(state?: CellState);
  constructor(coords?: Coordinates);
  constructor(coordsOrState?: Coordinates | CellState, state?: CellState) {
    if (!coordsOrState) {
      this._state = CellState.clear;
    }

    if (
      coordsOrState.hasOwnProperty("x") &&
      coordsOrState.hasOwnProperty("y")
    ) {
      const { x, y } = coordsOrState as Coordinates;
      this.x = x;
      this.y = y;

      this._state = state ?? CellState.clear;
    } else {
      const state = coordsOrState as CellState;

      this._state = state;
    }
  }
}
