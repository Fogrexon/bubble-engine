import { GameEntry } from './GameEntry';
export declare enum RespawnTarget {
    Player = 0,
    Enemy = 1
}
export declare class RespawnPoint extends GameEntry {
    private target;
    constructor(respawnTarget: RespawnTarget);
    start(): void;
    update(): void;
    exit(): void;
}
