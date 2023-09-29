export class EventEmitter<T extends Record<string, unknown>> {
  private readonly listeners: Record<keyof T, Array<(value: T[keyof T]) => void>>;

  constructor() {
    this.listeners = {} as Record<keyof T, Array<(value: T[keyof T]) => void>>;
  }

  public on<K extends keyof T>(event: K, listener: (value: T[K]) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener as (value: T[keyof T]) => void);
  }

  public emit<K extends keyof T>(event: K, value: T[K]): void {
    const listeners = this.listeners[event];
    if (listeners) {
      listeners.forEach((listener) => {
        listener(value);
      });
    }
  }

  public off<K extends keyof T>(event: K, listener: (value: T[K]) => void): void {
    const listeners = this.listeners[event];
    if (listeners) {
      const index = listeners.indexOf(listener as (value: T[keyof T]) => void);
      if (index >= 0) {
        listeners.splice(index, 1);
      }
    }
  }
}

export interface IEventEmittable<T extends Record<string, unknown>> {
  on<K extends keyof T>(event: K, listener: (value: T[K]) => void): void;
  off<K extends keyof T>(event: K, listener: (value: T[K]) => void): void;
}
