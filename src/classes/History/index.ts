export class History<T> {
  private _history: T[] = [];
  private _maxItems?: number;

  constructor(maxItems?: number) {
    this._maxItems = maxItems;
  }

  push(item: T) {
    this._history.push(item);
  }
}
