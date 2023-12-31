import { GameEntry } from '../entry';

export abstract class ComponentBase {
  private _entry: GameEntry | null = null;

  public get entry(): GameEntry {
    if (!this._entry) throw new Error('ComponentBase: This component is not attached to entry.');
    return this._entry;
  }

  private _initialized = false;

  private _started = false;

  private _enabled = true;

  public get enabled() {
    return this._enabled;
  }

  public set enabled(value: boolean) {
    if (!this._entry?.enabled) {
      this._enabled = value;
      return;
    }

    if (!this._enabled && value && this._entry?.enabled) {
      this._enabled = value;
      this.innerEnable();
    } else if (this._enabled && !value && this._entry?.enabled) {
      this.innerDisable();
      this._enabled = value;
    }
  }

  private _destroyed = false;

  public get destroyed() {
    return this._destroyed;
  }

  // region LifeCycle Hooks

  public innerAdded(entry: GameEntry) {
    this._entry = entry;
    this._destroyed = false;
    this._initialized = false;
    this._started = false;
  }

  public innerUpdate() {
    if (this._enabled) {
      if (!this._initialized) {
        this.onInitialize();
        this._initialized = true;
      }
      if (!this._started) {
        this.onStart();
        this._started = true;
      }

      this.onUpdate();
    }
  }

  public innerEnable() {
    if (this._enabled && this._entry?.enabled) {
      this._started = false;
      this.onEnable();
    }
  }

  public innerDisable() {
    if (this._enabled && this._entry?.enabled) {
      this.onDisable();
    }
  }

  public innerDestroy() {
    if (this._initialized) this.onDestroy();
    this._destroyed = true;
  }

  // endregion

  // region LifeCycle

  protected abstract onInitialize(): void;

  protected abstract onStart(): void;

  protected abstract onUpdate(): void;

  protected abstract onEnable(): void;

  protected abstract onDisable(): void;

  protected abstract onDestroy(): void;

  // endregion
}
