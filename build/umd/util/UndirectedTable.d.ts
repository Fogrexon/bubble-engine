/**
 * 与えられた文字列のリストのうち重複のない二つをキーとするテーブル
 */
export declare class UndirectedTable<TKeys extends readonly string[], TValue> {
    private readonly _keys;
    private readonly _table;
    constructor(keys: TKeys, defaultValue: TValue);
    /**
     * 2つの文字列をキーとする値の取り出し
     * @param key1
     * @param key2
     */
    get(key1: TKeys[number], key2: TKeys[number]): TValue;
    /**
     * 2つの文字列をキーとする値の設定
     * @param row
     * @param column
     * @param value
     */
    set(row: TKeys[number], column: TKeys[number], value: TValue): void;
    /**
     * テーブルの要素を重複無しで取り出す
     * @param callback
     */
    forEach(callback: (row: TKeys[number], column: TKeys[number], value: TValue) => void): void;
}
