import { GameEntry } from '../../entry';
import { LevelEventType } from '../../event';
export declare enum LevelState {
    Playing = 0,
    Paused = 1,
    GameOver = 2,
    GameClear = 3
}
export interface LevelManagerSettings {
    rootEntry: GameEntry;
}
/**
 * レベルに関する処理を管轄するクラス
 */
export declare class LevelManager {
    /**
     * レベルにあるEntryのルート
     */
    readonly rootEntry: GameEntry;
    /**
     * レベルの状態を表す
     * @protected
     */
    protected state: LevelState;
    protected constructor(levelManagerSettings: LevelManagerSettings);
    protected levelEventListener(levelEventType: LevelEventType): void;
    start(): void;
    exit(): void;
    protected gameOver(): void;
    protected gameClear(): void;
    protected pause(): void;
    protected resume(): void;
    protected playerDeath(): void;
}
