export class Player {
  public readonly id: number;

  protected _actualSocketId: string | null;
  protected _previousSocketIds: string[] = [];

  public get socketId() {
    return this._actualSocketId;
  }

  constructor(id: number, socketId: string) {
    this.id = id;
    this._actualSocketId = socketId;
  }
}
