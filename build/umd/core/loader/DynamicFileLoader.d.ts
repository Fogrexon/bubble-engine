import { ProgressFunc, FileType } from './fileLoaders';
import { AssetBase } from './asset';
/**
 * ゲーム開始後動的にファイルを読むためのクラス
 */
export declare class DynamicFileLoader {
    private _registeredAssetTable;
    /**
     * アセットの読み込み
     * @param key
     * @param asset
     * @param progress
     */
    load(key: string, asset: AssetBase<FileType>, progress: ProgressFunc): Promise<void>;
    /**
     * 複数アセットの読み込み
     * @param fileTable
     * @param progress
     */
    loadAll(fileTable: Record<string, AssetBase<FileType>>, progress?: (rate: number) => void): Promise<void>;
    /**
     * アセットの取得
     * @param id
     */
    get(id: string): AssetBase<FileType>;
    /**
     * アセットのメモリ開放
     * @param id
     */
    dispose(id: string): void;
}
