/* eslint-disable class-methods-use-this */
import { GameEntry } from '../entry';
import { LevelEvent, LevelEventType } from '../event';

// このLevelStateが二重定義されているというエラーが出るが、どこで定義されているのかわからないので暫定的に無視
// eslint-disable-next-line no-shadow
export enum LevelState {
  Playing,
  Paused,
  GameOver,
  GameClear,
}

export interface LevelManagerSettings {
  rootEntry: GameEntry;
}

/**
 * レベルに関する処理を管轄するクラス
 */
export class LevelManager {
  /**
   * レベルにあるEntryのルート
   */
  public readonly rootEntry;

  /**
   * レベルの状態を表す
   * @protected
   */
  protected state: LevelState;

  protected constructor(levelManagerSettings: LevelManagerSettings) {
    this.rootEntry = levelManagerSettings.rootEntry;
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
  }

  public exit() {
    this.rootEntry.destroy();
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
