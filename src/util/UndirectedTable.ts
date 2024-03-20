/**
 * 与えられた文字列のリストのうち重複のない二つをキーとするテーブル
 */
export class UndirectedTable<TKeys extends readonly string[], TValue> {
  private readonly _keys: TKeys;

  private readonly _table: Record<TKeys[number], Record<TKeys[number], TValue>> = {} as Record<
    TKeys[number],
    Record<TKeys[number], TValue>
  >;

  constructor(keys: TKeys, defaultValue: TValue) {
    this._keys = keys;
    keys.forEach((key: TKeys[number]) => {
      this._table[key] = {} as Record<TKeys[number], TValue>;
      keys.forEach((column: TKeys[number]) => {
        this._table[key][column] = defaultValue;
      });
    });
  }

  /**
   * 2つの文字列をキーとする値の取り出し
   * @param key1
   * @param key2
   */
  public get(key1: TKeys[number], key2: TKeys[number]): TValue {
    return this._table[key1][key2];
  }

  /**
   * 2つの文字列をキーとする値の設定
   * @param row
   * @param column
   * @param value
   */
  public set(row: TKeys[number], column: TKeys[number], value: TValue): void {
    this._table[row][column] = value;
    this._table[column][row] = value;
  }

  /**
   * テーブルの要素を重複無しで取り出す
   * @param callback
   */
  public forEach(
    callback: (row: TKeys[number], column: TKeys[number], value: TValue) => void
  ): void {
    this._keys.forEach((key: TKeys[number], index: number) => {
      for (let i = 0; i < index + 1; i += 1) {
        callback(key, this._keys[i], this.get(key, this._keys[i]));
      }
    });
  }
}
