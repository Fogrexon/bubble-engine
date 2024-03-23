import { GameEntry } from '../../entry';
import { GameApi } from '../GameCore';
export declare class LevelSelector<T extends string> {
    private _levelRecord;
    private _currentLevelKey;
    private _nextLevelKey;
    constructor();
    /**
     * APIでレベルを初期化
     * APIにLevelSelector自体が含まれるため、コンストラクタ外で指定
     * @param gameApi
     * @param levelTable
     * @param initialLevel
     */
    initializeLevels(gameApi: GameApi, levelTable: Record<T, (api: GameApi) => GameEntry>, initialLevel: T): void;
    /**
     * レベルを移動
     * ※注意 レベルの移動処理はGameEntryのupdate処理が全部終わってから行われるので、実行順に注意
     * @param levelName
     */
    moveLevel(levelName: T): void;
    /**
     * 現在のレベルのLevelManagerを取得
     */
    currentLevel(): Record<T, GameEntry>[T];
    /**
     * GameCoreによってupdate処理の後に呼ばれる
     */
    postProcess(): void;
}
