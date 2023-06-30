import { FileInfo } from './FileInfo';
/**
 * ゲーム開始時に読み込まれるデータ
 */
export declare class StaticLoader {
    private files;
    /**
     * ファイル定義リストからファイルをロードする
     * @param loadfiles ロードするファイルの定義
     * @param progress 進捗状況を受け取るコールバック
     */
    loadAll<T extends FileInfo[]>(loadfiles: T, progress: (rate: number) => void): Promise<void>;
    get(id: string): unknown;
}
