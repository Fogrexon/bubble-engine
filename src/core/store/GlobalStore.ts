export class GlobalStore<T extends Record<string, unknown>> {
  private _store: T;

  constructor(initialData: T) {
    this._store = initialData;
    this.loadData(initialData);
  }

  /**
   * データをLocalStorageから取得
   * @param initialData
   * @private
   */
  private loadData(initialData: T) {
    const rawData = localStorage.getItem('bubble-engine-storage');
    if (rawData) {
      const data = JSON.parse(rawData);
      this._store = {
        ...initialData,
        ...data,
      };
    }
  }

  /**
   * グローバルストアのデータを更新
   * @param key
   * @param dispatcher
   */
  public dispatch(key: keyof T, dispatcher: (store: T[typeof key]) => void) {
    dispatcher(this._store[key]);
    localStorage.setItem('bubble-engine-storage', JSON.stringify(this._store));
  }

  /**
   * データの取得
   * @param key
   */
  public getValue(key: keyof T): Readonly<T[typeof key]> {
    return this._store[key];
  }
}