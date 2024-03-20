import { fileLoaderTable, ProgressFunc, FileType } from './fileLoaders';
import { AssetBase } from './asset';
import {mapRecord, sumRecord} from '../../util/objutil';

/**
 * ゲーム開始後動的にファイルを読むためのクラス
 */
export class DynamicFileLoader {
  private _registeredAssetTable: Record<string, AssetBase<FileType>> = {};

  /**
   * アセットの読み込み
   * @param key
   * @param asset
   * @param progress
   */
  public async load(key: string, asset: AssetBase<FileType>, progress: ProgressFunc) {
    if (this._registeredAssetTable[key] !== undefined)
      throw new Error(`DynamicFileLoader: Asset(${String(key)}) is already registered`);
    const loader = fileLoaderTable[asset.fileType];
    this._registeredAssetTable[key] = asset;
    this._registeredAssetTable[key].data = await loader(asset.path, progress);
  }

  /**
   * 複数アセットの読み込み
   * @param fileTable
   * @param progress
   */
  public async loadAll(fileTable: Record<string, AssetBase<FileType>>, progress: (rate: number) => void = () => {}) {
    const loadFileProgresses = mapRecord(fileTable, () => 0) as Record<string, number>;
    const fileCount = Object.keys(fileTable).length;
    const loadFilePromises = Object.entries(fileTable).map(([key, asset]) => this.load(key, asset, (rate) => {
        loadFileProgresses[key] = rate;
        progress(sumRecord(loadFileProgresses) / fileCount);
      }));
  }

  /**
   * アセットの取得
   * @param id
   */
  public get(id: string): AssetBase<FileType> {
    if (!this._registeredAssetTable[id])
      throw new Error(`DynamicFileLoader: Asset(${String(id)}) is not registered`);
    return this._registeredAssetTable[id];
  }

  /**
   * アセットのメモリ開放
   * @param id
   */
  public dispose(id: string) {
    if (!this._registeredAssetTable[id])
      throw new Error(`DynamicFileLoader: Asset(${String(id)}) is not registered`);
    delete this._registeredAssetTable[id];
  }
}
