import {GameEntry} from '../../entry';
import {GameApi} from '../GameCore';
import {mapRecord} from '../../util/objutil';

type LevelRecord = Record<string, (api: GameApi) => GameEntry>;

export class LevelSelector<T extends LevelRecord = LevelRecord> {
  private _levelTable: T;

  private _levelRecord: Record<keyof T, GameEntry>;

  private _currentLevelKey: keyof T;

  private _nextLevelKey: keyof T | null = null;

  constructor(levelTable: T, initialLevelKey: keyof T) {
    this._levelTable = levelTable;
    this._levelRecord = {} as Record<keyof T, GameEntry>;
    this._currentLevelKey = initialLevelKey;
  }

  /**
   * APIでレベルを初期化
   * APIにLevelSelector自体が含まれるため、コンストラクタ外で指定
   * @param gameApi
   */
  public initializeLevels<U extends GameApi>(gameApi: U) {
    mapRecord(this._levelTable, (key, createRoot: (api: U) => GameEntry) => {
      createRoot(gameApi);
    });
  }

  /**
   * レベルを移動
   * ※注意 レベルの移動処理はGameEntryのupdate処理が全部終わってから行われるので、実行順に注意
   * @param levelName
   */
  public moveLevel(levelName: keyof LevelRecord) {
    if (this._nextLevelKey !== null) return;
    this._nextLevelKey = levelName;
    this._levelRecord[this._currentLevelKey].destroy();
    this._currentLevelKey = levelName;
  }

  /**
   * 現在のレベルのLevelManagerを取得
   */
  public currentLevel() {
    return this._levelRecord[this._currentLevelKey];
  }

  /**
   * GameCoreによってupdate処理の後に呼ばれる
   */
  public postProcess() {
    if (this._nextLevelKey !== null) {
      this._levelRecord[this._currentLevelKey].destroy();
      this._currentLevelKey = this._nextLevelKey;
      this._nextLevelKey = null;
    }
  }

}
