import { createGameEvent } from './GameEvent';

// eslint-disable-next-line no-shadow
export enum LevelEventType {
  LevelStart,
  Pause,
  Resume,
  PlayerDeath,
  GameOver,
  GameClear
}

export const LevelEvent = createGameEvent<LevelEventType>();
