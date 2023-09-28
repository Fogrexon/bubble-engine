import { GameEntry } from '../entry';
export declare abstract class ComponentBase {
    private _entry;
    get entry(): GameEntry;
    private _initialized;
    private _started;
    private _enabled;
    get enabled(): boolean;
    set enabled(value: boolean);
    private _destroyed;
    get destroyed(): boolean;
    innerAdded(entry: GameEntry): void;
    innerUpdate(): void;
    innerEnable(): void;
    innerDisable(): void;
    innerDestroy(): void;
    protected abstract onInitialize(): void;
    protected abstract onStart(): void;
    protected abstract onUpdate(): void;
    protected abstract onEnable(): void;
    protected abstract onDisable(): void;
    protected abstract onDestroy(): void;
}
