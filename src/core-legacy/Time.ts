export class Time {
  public timeScale = 1;

  private _gameTime = 0;

  public get gameTime(): number {
    return this._gameTime;
  }

  private _deltaTime = 0;

  public get deltaTime(): number {
    return this._deltaTime;
  }

  public get unscaledDeltaTime(): number {
    return this._deltaTime / this.timeScale;
  }

  private _prevSystemTime = 0;

  public calcDeltaTime() {
    const systemTime = performance.now();
    this._deltaTime = systemTime - this._prevSystemTime;
    this._deltaTime *= 0.001;
    this._deltaTime *= this.timeScale;
    this._prevSystemTime = systemTime;
    this._gameTime += this._deltaTime;
  }
}
