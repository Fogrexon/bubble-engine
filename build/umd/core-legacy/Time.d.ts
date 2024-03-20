export declare class Time {
    timeScale: number;
    private _gameTime;
    get gameTime(): number;
    private _deltaTime;
    get deltaTime(): number;
    get unscaledDeltaTime(): number;
    private _prevSystemTime;
    calcDeltaTime(): void;
}
