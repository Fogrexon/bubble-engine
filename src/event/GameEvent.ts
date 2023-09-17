export type GameEvent<T = undefined> = {
  listeners: Array<(data: T) => void>;
  listen: (listener: (data: T) => void) => void;
  unlisten: (listener: (data: T) => void) => void;
  call: (data: T) => void;
};

export const createGameEvent = <T = undefined>() => {
  const event: GameEvent<T> = {
    listeners: [],
    listen(listener) {
      this.listeners.push(listener);
    },
    unlisten(listener) {
      this.listeners = this.listeners.filter((l) => l !== listener);
    },
    call(data) {
      this.listeners.forEach((l) => l(data));
    },
  };
  return event;
};
