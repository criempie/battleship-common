import { CellState, Coordinates } from "../lobby/socket/types";
import { Cell } from "./Cell";

export class Field {
  protected _cells: Cell[][];

  public get cells() {
    return this._cells;
  }

  constructor(size: number) {
    this._cells = Field._generateCells(size);
  }

  public static _generateCells(size: number) {
    return Array(size)
      .fill(null)
      .map((_, x) =>
        Array(size)
          .fill(null)
          .map((_, y) => new Cell({ x, y }))
      );
  }

  protected _setStateToCell({ x, y }: Coordinates, state: CellState) {
    this._cells[x][y].state = state;
  }
}
