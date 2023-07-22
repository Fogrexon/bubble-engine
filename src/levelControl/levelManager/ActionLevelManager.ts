import {LevelManager, LevelManagerSettings} from '../LevelManager';
import {RespawnPoint} from '../../entry/RespawnPoint';
import {LevelEvent, LevelEventType} from '../../event/LevelEvent';
import {wait} from '../../util/wait';

export type ActionLevelManagerSettings = {
  respawnPoint: RespawnPoint;
  life: number;
  respawnDelay: number;
} & LevelManagerSettings;

export class ActionLevelManager extends LevelManager {
  public playerLife: number = -1;

  public playerRespawnPoint: RespawnPoint;

  public playerRespawnDelay: number = 0;
  
  constructor(actionLevelManagerSettings: ActionLevelManagerSettings) {
    super(actionLevelManagerSettings);
  
    this.playerRespawnPoint = actionLevelManagerSettings.respawnPoint;
    this.playerLife = actionLevelManagerSettings.life;
    this.playerRespawnDelay = actionLevelManagerSettings.respawnDelay;
  }
  
  protected override playerDeath() {
    super.playerDeath();
    if (this.playerLife === -1) {
      this.respawnPlayer();
    }
    this.playerLife -= 1;
    if (this.playerLife === 0) {
      LevelEvent.call(LevelEventType.GameOver);
    } else {
      this.respawnPlayer();
    }
  }
  
  private async respawnPlayer() {
    if (this.playerRespawnDelay > 0) await wait(this.playerRespawnDelay * 1000);
    
  }

  public setRespawnPoint(respawnPoint: RespawnPoint) {
    this.playerRespawnPoint = respawnPoint;
  }
}
