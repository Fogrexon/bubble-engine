export declare class Time {
    timeScale: number;
    private _gameTime;
    /**
     * ゲーム起動からのゲーム内時間
     */
    get gameTime(): number;
    private _deltaTime;
    /**
     * 前フレームからのゲーム内経過時間
     */
    get deltaTime(): number;
    private _unscaledDeltaTime;
    /**
     * timeScaleに影響しない前フレームからの実経過時間
     */
    get unscaledDeltaTime(): number;
    private _levelStartTime;
    /**
     * 現在のレベルの開始からのゲーム内経過時間
     */
    get levelTime(): number;
    private _previousTimeStamp;
    /**
     * フレーム時間を計算する
     * GameCoreのupdate関数内で呼び出す
     * @param timeStamp
     */
    calcDeltaTime(timeStamp: number): void;
    resetLevelTime(): void;
    reset(previousTimeStamp: number): void;
}
