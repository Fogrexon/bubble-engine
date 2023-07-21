import {GameEntry} from '../entry/GameEntry';
import {LevelEvent, LevelEventType} from '../event/LevelEvent';

export enum LevelState {
  Playing,
  Paused,
  GameOver,
  GameClear
}

export abstract class LevelManager {
  private dependedEntries: GameEntry[];

  private state: LevelState;

  protected constructor(dependedEntries: GameEntry[]) {
    this.dependedEntries = dependedEntries;
    this.state = LevelState.Playing;
  }

  private levelEventListener(levelEventType: LevelEventType) {
    switch(levelEventType) {
    case 'level-start':
      // do nothing
      break;
    case 'level-paused':
      this.state = LevelState.Paused;
      break;
    case 'level-resume':
      this.state = LevelState.Playing;
      break;
    case 'player-death':
      // do nothing
      break;
    case 'level-clear':
      this.state = LevelState.GameClear;
      break;
    case 'level-fail':
      this.state = LevelState.GameOver;
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
}
