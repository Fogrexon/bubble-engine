import { LevelManager } from './LevelManager';

type LevelRecord = Record<string, LevelManager>;

export class LevelSelector<T extends LevelRecord = LevelRecord> {
  private readonly _levelRecord: T;

  private _currentLevelKey: keyof T;

  constructor(levels: T, initialLevelKey: keyof T) {
    this._levelRecord = levels;
    this._currentLevelKey = initialLevelKey;
  }

  /**
   * レベルを移動
   * @param levelName
   */
  public moveLevel(levelName: keyof LevelRecord) {
    this._levelRecord[this._currentLevelKey].exit();
    this._currentLevelKey = levelName;
    this._levelRecord[this._currentLevelKey].start();
  }

  /**
   * 現在のレベルのLevelManagerを取得
   */
  public currentLevel() {
    return this._levelRecord[this._currentLevelKey];
  }
}
