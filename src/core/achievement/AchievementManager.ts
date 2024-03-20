import {AchievementBlueprintTable, AchievementStatusBlueprintTable} from './blueprint';
import {AchievementStatusTable, AchievementTable} from './achieve';


export class AchievementManager<T extends AchievementStatusBlueprintTable, K extends AchievementBlueprintTable<T>> {
  private _statusBlueprint: T;

  private _achievementBlueprint: K;

  private _status: AchievementStatusTable<T>;

  private _achievement: AchievementTable<T, K>;

  constructor(statusBlueprint: T, achievementBlueprint: K) {
    this._statusBlueprint = statusBlueprint;
    this._achievementBlueprint = achievementBlueprint;

    this._status = {} as AchievementStatusTable<T>;
    this._achievement = {} as AchievementTable<T, K>;
    this.createInitialStatus();
    this.createInitialAchievement();
  }

  private createInitialStatus() {
    for (const key in this._statusBlueprint) {
      const blueprint = this._statusBlueprint[key];
      if (blueprint.type === 'once') {
        this._status[key] = false as AchievementStatusTable<T>[typeof key];
      } else {
        this._status[key] = blueprint.initial as AchievementStatusTable<T>[typeof key];
      }
    }
  }

  private createInitialAchievement() {
    for (const key in this._achievementBlueprint) {
      this._achievement[key] = false;
    }
  }
}