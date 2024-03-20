import {AchievementBlueprintTable, AchievementStatusBlueprintTable, AchievementStatusTypeFromKey} from './blueprint';

export type AchievementStatusTable<T extends AchievementStatusBlueprintTable> = {
  [key in keyof T]: AchievementStatusTypeFromKey<T, key>
}

export type AchievementTable<T extends AchievementStatusBlueprintTable, K extends AchievementBlueprintTable<T>> = {
  [key in keyof K]: boolean
}

export type StatusToAchievement<T extends AchievementStatusBlueprintTable, K extends AchievementBlueprintTable<T>> = {
  [key in keyof T]: (keyof K)[]
}
