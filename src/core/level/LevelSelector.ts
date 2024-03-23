import {GameEntry} from '../../entry';
import {GameApi} from '../GameCore';
import {mapRecord} from '../../util/objutil';


export class LevelSelector<T extends string> {
  private _levelRecord: Record<T, GameEntry>;

  private _currentLevelKey: T | null = null;

  private _nextLevelKey: T | null = null;

  constructor() {
    this._levelRecord = {} as Record<T, GameEntry>;
  }

  /**
   * APIでレベルを初期化
   * APIにLevelSelector自体が含まれるため、コンストラクタ外で指定
   * @param gameApi
   * @param levelTable
   * @param initialLevel
   */
  public initializeLevels(gameApi: GameApi, levelTable: Record<T, (api: GameApi) => GameEntry>, initialLevel: T) {
    mapRecord(levelTable, (key, createRoot: (api: GameApi) => GameEntry) => {
      this._levelRecord[key] = createRoot(gameApi);
    });
    this._currentLevelKey = initialLevel;
  }

  /**
   * レベルを移動
   * ※注意 レベルの移動処理はGameEntryのupdate処理が全部終わってから行われるので、実行順に注意
   * @param levelName
   */
  public moveLevel(levelName: T) {
    if (this._nextLevelKey !== null) return;
    if (this._currentLevelKey === null) throw new Error('currentLevelKey is null');
    this._nextLevelKey = levelName;
    this._levelRecord[this._currentLevelKey].destroy();
    this._currentLevelKey = levelName;
  }

  /**
   * 現在のレベルのLevelManagerを取得
   */
  public currentLevel() {
    if (this._currentLevelKey === null) throw new Error('currentLevelKey is null');
    return this._levelRecord[this._currentLevelKey];
  }

  /**
   * GameCoreによってupdate処理の後に呼ばれる
   */
  public postProcess() {
    if (this._currentLevelKey === null) throw new Error('currentLevelKey is null');
    if (this._nextLevelKey !== null) {
      this._levelRecord[this._currentLevelKey].destroy();
      this._currentLevelKey = this._nextLevelKey;
      this._nextLevelKey = null;
    }
  }

}
