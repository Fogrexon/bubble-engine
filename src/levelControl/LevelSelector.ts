import { LevelManager } from './LevelManager';

type LevelRecord = Record<string, LevelManager>;

export class LevelSelector {
  private static levels: LevelRecord;

  private static currentLevelKey: keyof LevelRecord = '';

  public static init(levels: LevelRecord) {
    LevelSelector.levels = levels;
    [LevelSelector.currentLevelKey] = Object.keys(levels);
  }

  public static moveLevel(levelName: keyof LevelRecord) {
    LevelSelector.levels[this.currentLevelKey].exit();
    this.currentLevelKey = levelName;
    LevelSelector.levels[this.currentLevelKey].start();
  }

  public static currentLevel() {
    return LevelSelector.levels[LevelSelector.currentLevelKey];
  }
}
