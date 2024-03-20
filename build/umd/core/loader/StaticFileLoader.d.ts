import { FileType } from './fileLoaders';
import { AssetBase } from './asset';
/**
 * ゲームに必要なファイルを読み取るクラス
 * 型安全にするために、ファイルのリストをコンストラクタで渡す
 */
export declare class StaticFileLoader<U extends Record<string, AssetBase<FileType>> = {}> {
    private readonly _fileList;
    constructor(fileList: U);
    /**
     * ファイルをすべて読み込む
     * @param progress
     */
    loadAll(progress: (rate: number) => void): Promise<void>;
    get<K extends keyof U>(id: K): U[K];
}
