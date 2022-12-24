import { Field } from "./Field";

export class Player<F extends Field = Field> {
  public readonly id: string;
  public readonly field: F;

  protected _actualSocketId: string | null;
  protected _previousSocketIds: string[] = [];

  constructor(id: string, field: F);
  constructor(id: string, socketId: string, field: F);
  constructor(id: string, socketIdOfFIeld: string | F, field?: F) {
    this.id = id;
    if (typeof socketIdOfFIeld === "string") {
      const socketId = socketIdOfFIeld;
      this._actualSocketId = socketId;
      this.field = field;
    } else {
      const field = socketIdOfFIeld;
      this.field = field;
    }
  }
}
