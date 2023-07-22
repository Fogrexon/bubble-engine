import { LevelManager } from "./LevelManager";
export declare class LevelSelector<T extends Record<string, LevelManager>> {
    private levels;
    constructor(levels: T);
    moveLevel(levelName: keyof T): void;
}
