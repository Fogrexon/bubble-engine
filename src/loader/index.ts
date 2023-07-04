import { FileStoreEntry, FileInfo } from './FileInfo';
import { LoadImage, LoadFileFunc } from './defaultLoader';

/**
 * データローダー
 */
export class ResourceLoader {
  private files: Record<string, FileStoreEntry<unknown>> = {};

  /**
   * ファイルタイプとロード関数の対応表
   */
  private resourceLoaders: Record<string, LoadFileFunc<unknown>> = {
    image: LoadImage,
  };

  /**
   * 新規のローダーを登録する
   * @param type ローダーを登録するファイルタイプ
   * @param loader ローダー本体
   * @throws ファイルタイプが既に登録されている場合
   */
  public registerLoader<T>(type: string, loader: LoadFileFunc<T>) {
    if (this.resourceLoaders[type])
      throw new Error(`ResourceLoader: Loader for type ${type} already exists`);
    this.resourceLoaders[type] = loader;
  }

  /**
   * ファイル定義リストからファイルをロードする
   * @param loadfiles ロードするファイルの定義
   * @param progress 進捗状況を受け取るコールバック
   */
  public async loadAll<T extends Record<string, FileInfo>>(
    loadfiles: T,
    progress: (rate: number) => void
  ) {
    progress.bind(this)(0);
    const loadFileKeys = Object.keys(loadfiles);
    const fileProgresses = loadFileKeys.map(() => 0);
    const recalculateProgress = () => {
      progress.bind(this)(fileProgresses.reduce((a, b) => a + b) / fileProgresses.length);
    };

    const promises = Object.values(loadfiles).map((file: FileInfo, index: number) => {
      if (!this.resourceLoaders[file.type])
        throw new Error(`ResourceLoader: File type ${file.type} is not supported`);
      return this.resourceLoaders[file.type](file.path, (rate) => {
        fileProgresses[index] = rate;
        recalculateProgress();
      });
    });

    const data = await Promise.all(promises);

    loadFileKeys.forEach((key, index) => {
      this.files[key] = {
        fileInfo: loadfiles[key],
        data: data[index],
      };
    });
  }

  public get<T>(id: string) {
    return this.files[id].data as T;
  }

  public unload(id: string) {
    delete this.files[id];
  }
}
