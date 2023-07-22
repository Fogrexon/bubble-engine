import { LevelManager } from './LevelManager';
type LevelRecord = Record<string, LevelManager>;
export declare class LevelSelector {
    private static levels;
    private static currentLevelKey;
    static init(levels: LevelRecord): void;
    static moveLevel(levelName: keyof LevelRecord): void;
    static currentLevel(): LevelManager;
}
export {};
