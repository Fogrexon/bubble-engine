import { fileLoaderTable, ProgressFunc, FileType } from './fileLoaders';
import { AssetBase } from './asset';

/**
 * ゲーム開始後動的にファイルを読むためのクラス
 */
export class DynamicFileLoader {
  private _registeredAssetTable: Record<string, AssetBase<FileType>> = {};

  public async load(key: string, asset: AssetBase<FileType>, progress: ProgressFunc) {
    if (this._registeredAssetTable[key] !== undefined)
      throw new Error(`DynamicFileLoader: Asset(${String(key)}) is already registered`);
    const loader = fileLoaderTable[asset.fileType];
    this._registeredAssetTable[key] = asset;
    this._registeredAssetTable[key].data = await loader(asset.path, progress);
  }

  public get(id: string): AssetBase<FileType> {
    if (!this._registeredAssetTable[id])
      throw new Error(`DynamicFileLoader: Asset(${String(id)}) is not registered`);
    return this._registeredAssetTable[id];
  }

  public dispose(id: string) {
    if (!this._registeredAssetTable[id])
      throw new Error(`DynamicFileLoader: Asset(${String(id)}) is not registered`);
    delete this._registeredAssetTable[id];
  }
}
