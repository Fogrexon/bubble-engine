export class AssetBase<T> {
  protected _data: T;

  public get data() {
    return this._data;
  }

  constructor(data: T) {
    this._data = data;
  }
}
