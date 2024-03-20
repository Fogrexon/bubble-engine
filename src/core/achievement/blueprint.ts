export type AchievementStatusBlueprint = {
  name: string;
  description: string;
} & (
  { type: 'once' } |
  { type: 'number', initial: number } |
  { type: 'string', initial: string }
  )

export type AchievementStatusBlueprintTable = Record<string, AchievementStatusBlueprint>

export type AchievementStatusTypeFromKey<
  T extends AchievementStatusBlueprintTable,
  K extends keyof T
> = T[K]['type'] extends 'once' ? boolean :
  T[K]['type'] extends 'number' ? number :
    T[K]['type'] extends 'string' ? string :
      never

export type AchievementBlueprint<T extends AchievementStatusBlueprintTable> = {
  conditions: {
    [key in keyof T]: AchievementStatusTypeFromKey<T, key>
  },
  name: string,
  description: string,
}

export type AchievementBlueprintTable<T extends AchievementStatusBlueprintTable> = Record<string, AchievementBlueprint<T>>
