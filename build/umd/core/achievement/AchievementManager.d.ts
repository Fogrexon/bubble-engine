import { AchievementBlueprintTable, AchievementStatusBlueprintTable } from './blueprint';
export declare class AchievementManager<T extends AchievementStatusBlueprintTable, K extends AchievementBlueprintTable<T>> {
    private _statusBlueprint;
    private _achievementBlueprint;
    private _status;
    private _achievement;
    constructor(statusBlueprint: T, achievementBlueprint: K);
    private createInitialStatus;
    private createInitialAchievement;
}
