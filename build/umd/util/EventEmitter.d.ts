export declare class EventEmitter<T extends Record<string, unknown>> {
    private readonly listeners;
    constructor();
    on<K extends keyof T>(event: K, listener: (value: T[K]) => void): void;
    emit<K extends keyof T>(event: K, value: T[K]): void;
    off<K extends keyof T>(event: K, listener: (value: T[K]) => void): void;
}
export interface IEventEmittable<T extends Record<string, unknown>> {
    on<K extends keyof T>(event: K, listener: (value: T[K]) => void): void;
    off<K extends keyof T>(event: K, listener: (value: T[K]) => void): void;
}
