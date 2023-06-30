import { FileInfo, FileStoreEntry } from "./FileInfo";
import { fileLoaderTable } from './fileLoader'

/**
 * ゲーム開始時に読み込まれるデータ
 */
export class StaticLoader {
  private files: Record<string, FileStoreEntry<unknown>> = {};

  /**
   * ファイル定義リストからファイルをロードする
   * @param loadfiles ロードするファイルの定義
   * @param progress 進捗状況を受け取るコールバック
   */
  public async loadAll<T extends FileInfo[]>(loadfiles: T, progress: (rate: number) => void) {
    progress.bind(this)(0);
    const fileProgresses = loadfiles.map(() => 0);
    const recalculateProgress = () => {
      progress.bind(this)(fileProgresses.reduce((a, b) => a + b) / fileProgresses.length);
    }
    const fileLoaderTableId = Object.keys(fileLoaderTable);
    const promises = loadfiles.map((file: FileInfo, index: number) => {
      if (fileLoaderTableId.indexOf(file.type) === -1) throw new Error(`File type ${file.type} is not supported`);
      const fileType: keyof typeof fileLoaderTable = file.type as keyof typeof fileLoaderTable;
      return fileLoaderTable[fileType](file.path, (rate) => {
        fileProgresses[index] = rate;
        recalculateProgress();
      });
    })
    
    const data = await Promise.all(promises);
    loadfiles.forEach((file, index) => {
      this.files[file.id] = {
        fileInfo: file,
        data: data[index]
      }
    });
  }

  public get(id: string) {
    return this.files[id].data;
  }
}