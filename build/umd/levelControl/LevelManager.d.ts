import { GameEntry } from "../entry/GameEntry";
export declare abstract class LevelManager {
    private dependedEntries;
    constructor(dependedEntries: GameEntry[]);
    abstract start(): Promise<void>;
    abstract update(): Promise<void>;
    abstract exit(): Promise<void>;
}
