import { GameEntry } from '../entry';
/**
 * 基本的なコンポーネント更新前に実行される事前処理用のコンポーネント
 */
export declare abstract class PreprocessBase {
    readonly entry: GameEntry;
    constructor(entry: GameEntry);
    abstract process(): void;
}
