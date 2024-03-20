import { GameEntry } from '../../entry';

/**
 * 基本的なコンポーネント更新前に実行される事前処理用のコンポーネント
 */
export abstract class PreprocessBase {
  public readonly entry: GameEntry;

  constructor(entry: GameEntry) {
    this.entry = entry;
  }

  public abstract process(): void;
}
