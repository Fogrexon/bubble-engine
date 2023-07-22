/* eslint-disable class-methods-use-this */
import { GameEntry } from '../entry/GameEntry';
import { LevelEvent, LevelEventType } from '../event/LevelEvent';

// このLevelStateが二重定義されているというエラーが出るが、どこで定義されているのかわからないので暫定的に無視
// eslint-disable-next-line no-shadow
export enum LevelState {
  Playing,
  Paused,
  GameOver,
  GameClear,
}

export interface LevelManagerSettings {
  dependedEntries: GameEntry[];
}

export class LevelManager {
  private dependedEntries: GameEntry[];

  protected state: LevelState;

  protected constructor(levelManagerSettings: LevelManagerSettings) {
    this.dependedEntries = levelManagerSettings.dependedEntries;
    this.state = LevelState.Playing;
  }

  protected levelEventListener(levelEventType: LevelEventType) {
    switch (levelEventType) {
    case LevelEventType.LevelStart:
      // do nothing
      break;
    case LevelEventType.Pause:
      this.state = LevelState.Paused;
      this.pause();
      break;
    case LevelEventType.Resume:
      this.state = LevelState.Playing;
      this.resume();
      break;
    case LevelEventType.PlayerDeath:
      this.playerDeath();
      break;
    case LevelEventType.GameClear:
      this.state = LevelState.GameClear;
      this.gameClear();
      break;
    case LevelEventType.GameOver:
      this.state = LevelState.GameOver;
      this.gameOver();
      break;
    default:
      throw new Error(`LevelManager: Invalid LevelEventType (${levelEventType})`);
    }
  }

  public start(): void {
    this.state = LevelState.Playing;
    LevelEvent.listen(this.levelEventListener.bind(this));
    this.dependedEntries.forEach((entry) => {
      entry.start();
    });
  }

  public update() {
    this.dependedEntries.forEach((entry) => {
      entry.update();
    });
  }

  public exit() {
    this.dependedEntries.forEach((entry) => {
      entry.exit();
    });
    LevelEvent.unlisten(this.levelEventListener.bind(this));
  }

  protected gameOver() {
    // no impl
  }

  protected gameClear() {
    // no impl
  }

  protected pause() {
    // no impl
  }

  protected resume() {
    // no impl
  }

  protected playerDeath() {
    // no impl
  }
}
