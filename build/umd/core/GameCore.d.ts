import { InputKeybind, InputManager } from './input';
import { AssetBase, DynamicFileLoader, FileType, StaticFileLoader } from './loader';
import { AchievementBlueprintTable, AchievementManager, AchievementStatusBlueprintTable } from './achievement';
import { CollisionPreprocessManager, GraphicPreprocessManager } from './preprocess';
import { GlobalStore } from './store';
import { LevelManager } from '../levelControl';
import { GameEntry } from '../entry';
export type GameCoreSettings<T1 extends Record<string, InputKeybind> = Record<string, InputKeybind>, T2 extends Record<string, AssetBase<FileType>> = Record<string, AssetBase<FileType>>, T3 extends string[] = string[], T4 extends string[] = string[], T5 extends [T4[number], T4[number]][] = [T4[number], T4[number]][], T6 extends AchievementStatusBlueprintTable = AchievementStatusBlueprintTable, T7 extends AchievementBlueprintTable<T6> = AchievementBlueprintTable<T6>, T8 extends Record<string, unknown> = Record<string, unknown>, T9 extends LevelManager = LevelManager, T10 extends Record<string, GameEntry> = Record<string, GameEntry>, T11 extends keyof T10 = keyof T10> = {
    keybind: T1;
    staticLoadAssets: T2;
    graphicLayers: T3;
    collisionLayers: T4;
    collisionPairs: T5;
    achievementStatusBlueprint: T6;
    achievementBlueprint: T7;
    initialGlobalStore: T8;
    levelManager: T9;
    levelTable: T10;
    initialLevel: T11;
};
export declare class GameCore<T extends GameCoreSettings = GameCoreSettings> {
    private _originalSettings;
    private _inputManager;
    get inputManager(): InputManager<T["keybind"]>;
    private _staticFileLoader;
    get staticFileLoader(): StaticFileLoader<T["staticLoadAssets"]>;
    private _dynamicFileLoader;
    get dynamicFileLoader(): DynamicFileLoader;
    private _graphicManager;
    get graphicManager(): GraphicPreprocessManager<T["graphicLayers"]>;
    private _collisionLayers;
    get collisionLayers(): CollisionPreprocessManager<T["collisionLayers"], T["collisionPairs"]>;
    private _achievementManager;
    get achievementManager(): AchievementManager<T["achievementStatusBlueprint"], T["achievementBlueprint"]>;
    private _globalStore;
    get globalStore(): GlobalStore<T["initialGlobalStore"]>;
    private _levelManager;
    get levelManager(): T["levelManager"];
    private _levelSelector;
    private _requestAnimationFrameId;
    constructor(settings: T);
    private initializeGame;
    private gameLoop;
    /**
     * ゲームの開始コマンド
     */
    run(): void;
}
