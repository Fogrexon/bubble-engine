export class Time {
  public timeScale = 1;

  private _gameTime = 0;

  /**
   * ゲーム起動からのゲーム内時間
   */
  public get gameTime(): number {
    return this._gameTime;
  }

  private _deltaTime = 0;

  /**
   * 前フレームからのゲーム内経過時間
   */
  public get deltaTime(): number {
    return this._deltaTime;
  }

  private _unscaledDeltaTime = 0;

  /**
   * timeScaleに影響しない前フレームからの実経過時間
   */
  public get unscaledDeltaTime(): number {
    return this._unscaledDeltaTime;
  }

  private _levelStartTime = 0;

  /**
   * 現在のレベルの開始からのゲーム内経過時間
   */
  public get levelTime(): number {
    return this._gameTime - this._levelStartTime;
  }

  private _previousTimeStamp = 0;

  /**
   * フレーム時間を計算する
   * GameCoreのupdate関数内で呼び出す
   * @param timeStamp
   */
  public calcDeltaTime(timeStamp: number) {
    const unscaledDeltaTime = timeStamp - this._previousTimeStamp;
    this._previousTimeStamp = timeStamp;
    this._unscaledDeltaTime = unscaledDeltaTime;
    this._deltaTime = unscaledDeltaTime * this.timeScale;
    this._gameTime += this._deltaTime;
  }

  public resetLevelTime() {
    this._levelStartTime = this._gameTime;
  }

  public reset(previousTimeStamp: number) {
    this._gameTime = 0;
    this._deltaTime = 0;
    this._unscaledDeltaTime = 0;
    this._levelStartTime = 0;
    this._previousTimeStamp = previousTimeStamp;
  }
}
