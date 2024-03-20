import { FileType, fileLoaderTable } from './fileLoaders';
import { AssetBase } from './asset';

/**
 * ゲームに必要なファイルを読み取るクラス
 * 型安全にするために、ファイルのリストをコンストラクタで渡す
 */
export class StaticFileLoader<U extends Record<string, AssetBase<FileType>> = {}> {
  private readonly _fileList: U;

  constructor(fileList: U) {
    this._fileList = fileList;
  }

  /**
   * ファイルをすべて読み込む
   * @param progress
   */
  public async loadAll(progress: (rate: number) => void) {
    let loadedCount = 0;

    const loadFilePromises = Object.entries(this._fileList).map(([key, asset]) => {
      const loader = fileLoaderTable[asset.fileType];
      return loader(asset.path, null).then((data) => {
        loadedCount += 1;
        progress(loadedCount / Object.keys(this._fileList).length);
        asset.data = data;
        return [key, data];
      });
    });
    await Promise.all(loadFilePromises);
  }

  public get<K extends keyof U>(id: K): U[K] {
    return this._fileList[id];
  }
}
