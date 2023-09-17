import { LevelManager, LevelManagerSettings } from '../LevelManager';
import { RespawnPoint } from '../../entry';
export type ActionLevelManagerSettings = {
    respawnPoint: RespawnPoint;
    life: number;
    respawnDelay: number;
} & LevelManagerSettings;
export declare class ActionLevelManager extends LevelManager {
    playerLife: number;
    playerRespawnPoint: RespawnPoint;
    playerRespawnDelay: number;
    constructor(actionLevelManagerSettings: ActionLevelManagerSettings);
    protected playerDeath(): void;
    private respawnPlayer;
    setRespawnPoint(respawnPoint: RespawnPoint): void;
}
