export declare class GlobalStore<T extends Record<string, unknown>> {
    private _store;
    constructor(initialData: T);
    /**
     * データをLocalStorageから取得
     * @param initialData
     * @private
     */
    private loadData;
    /**
     * グローバルストアのデータを更新
     * @param key
     * @param dispatcher
     */
    dispatch(key: keyof T, dispatcher: (store: T[typeof key]) => void): void;
    /**
     * データの取得
     * @param key
     */
    getValue(key: keyof T): Readonly<T[typeof key]>;
}
