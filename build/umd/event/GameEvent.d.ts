export type GameEvent<T = undefined> = {
    listeners: Array<(data: T) => void>;
    listen: (listener: (data: T) => void) => void;
    unlisten: (listener: (data: T) => void) => void;
    call: (data: T) => void;
};
export declare const createGameEvent: <T = undefined>() => GameEvent<T>;
