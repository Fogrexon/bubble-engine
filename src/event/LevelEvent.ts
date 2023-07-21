import {createGameEvent} from './GameEvent';

export type LevelEventType = 'level-start' | 'level-paused' | 'level-resume' | 'player-death' | 'level-clear' | 'level-fail'

export const LevelEvent = createGameEvent<LevelEventType>();
