export declare enum LevelEventType {
    LevelStart = 0,
    Pause = 1,
    Resume = 2,
    PlayerDeath = 3,
    GameOver = 4,
    GameClear = 5
}
export declare const LevelEvent: import("./GameEvent").GameEvent<LevelEventType>;
