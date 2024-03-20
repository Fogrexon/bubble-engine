import { LevelManager } from '../../levelControl/LevelManager';
type LevelRecord = Record<string, LevelManager>;
export declare class LevelSelector<T extends LevelRecord = LevelRecord> {
    private readonly _levelRecord;
    private _currentLevelKey;
    constructor(levels: T, initialLevelKey: keyof T);
    /**
     * レベルを移動
     * @param levelName
     */
    moveLevel(levelName: keyof LevelRecord): void;
    /**
     * 現在のレベルのLevelManagerを取得
     */
    currentLevel(): T[keyof T];
}
export {};
