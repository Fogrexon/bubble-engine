import { ProgressFunc, FileType } from './fileLoaders';
import { AssetBase } from './asset';
/**
 * ゲーム開始後動的にファイルを読むためのクラス
 */
export declare class DynamicFileLoader {
    private _registeredAssetTable;
    load(key: string, asset: AssetBase<FileType>, progress: ProgressFunc): Promise<void>;
    get(id: string): AssetBase<FileType>;
    dispose(id: string): void;
}
