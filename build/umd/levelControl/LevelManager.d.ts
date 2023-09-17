import { GameEntry } from '../entry/GameEntry';
import { LevelEventType } from '../event/LevelEvent';
export declare enum LevelState {
    Playing = 0,
    Paused = 1,
    GameOver = 2,
    GameClear = 3
}
export interface LevelManagerSettings {
    dependedEntries: GameEntry[];
}
export declare class LevelManager {
    private dependedEntries;
    protected state: LevelState;
    protected constructor(levelManagerSettings: LevelManagerSettings);
    protected levelEventListener(levelEventType: LevelEventType): void;
    start(): void;
    update(): void;
    exit(): void;
    protected gameOver(): void;
    protected gameClear(): void;
    protected pause(): void;
    protected resume(): void;
    protected playerDeath(): void;
}
