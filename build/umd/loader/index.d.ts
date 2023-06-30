import { FileInfo } from './FileInfo';
import { LoadFileFunc } from './defaultLoader';
/**
 * データローダー
 */
export declare class ResourceLoader {
    private files;
    /**
     * ファイルタイプとロード関数の対応表
     */
    private resourceLoaders;
    /**
     * 新規のローダーを登録する
     * @param type ローダーを登録するファイルタイプ
     * @param loader ローダー本体
     * @throws ファイルタイプが既に登録されている場合
     */
    registerLoader<T>(type: string, loader: LoadFileFunc<T>): void;
    /**
     * ファイル定義リストからファイルをロードする
     * @param loadfiles ロードするファイルの定義
     * @param progress 進捗状況を受け取るコールバック
     */
    loadAll<T extends Record<string, FileInfo>>(loadfiles: T, progress: (rate: number) => void): Promise<void>;
    get<T>(id: string): T;
    unload(id: string): void;
}
