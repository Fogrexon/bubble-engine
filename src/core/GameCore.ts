import {InputKeybind, InputManager} from './input';
import {AssetBase, DynamicFileLoader, FileType, StaticFileLoader} from './loader';
import {AchievementBlueprintTable, AchievementManager, AchievementStatusBlueprintTable} from './achievement';
import {CollisionPreprocessManager, GraphicPreprocessManager} from './preprocess';
import {GlobalStore} from './store';
import {LevelManager} from '../levelControl';
import {GameEntry} from '../entry';
import {LevelSelector} from './level';

export type GameCoreSettings<
  T1 extends Record<string, InputKeybind> = Record<string, InputKeybind>,
  T2 extends Record<string, AssetBase<FileType>> = Record<string, AssetBase<FileType>>,
  T3 extends string[] = string[],
  T4 extends string[] = string[],
  T5 extends [T4[number], T4[number]][] = [T4[number], T4[number]][],
  T6 extends AchievementStatusBlueprintTable = AchievementStatusBlueprintTable,
  T7 extends AchievementBlueprintTable<T6> = AchievementBlueprintTable<T6>,
  T8 extends Record<string, unknown> = Record<string, unknown>,
  T9 extends LevelManager = LevelManager,
  T10 extends Record<string, GameEntry> = Record<string, GameEntry>,
  T11 extends keyof T10 = keyof T10,
> = {
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
}
export class GameCore<T extends GameCoreSettings = GameCoreSettings> {
  // setttings

  private _originalSettings: T;

  private _inputManager: InputManager<T['keybind']>;

  public get inputManager() {
    return this._inputManager;
  }

  private _staticFileLoader: StaticFileLoader<T['staticLoadAssets']>;

  public get staticFileLoader() {
    return this._staticFileLoader;
  }

  private _dynamicFileLoader: DynamicFileLoader;

  public get dynamicFileLoader() {
    return this._dynamicFileLoader;
  }

  private _graphicManager: GraphicPreprocessManager<T['graphicLayers']>;

  public get graphicManager() {
    return this._graphicManager;
  }

  private _collisionLayers: CollisionPreprocessManager<T['collisionLayers'], T['collisionPairs']>;

  public get collisionLayers() {
    return this._collisionLayers;
  }

  private _achievementManager: AchievementManager<T['achievementStatusBlueprint'], T['achievementBlueprint']>;

  public get achievementManager() {
    return this._achievementManager;
  }

  private _globalStore: GlobalStore<T['initialGlobalStore']>;

  public get globalStore() {
    return this._globalStore;
  }

  private _levelManager: T['levelManager'];

  public get levelManager() {
    return this._levelManager;
  }

  private _levelSelector: LevelSelector<T['levelTable']>;

  private _requestAnimationFrameId: number = -1;

  constructor(settings: T) {
    this._originalSettings = settings;
    this._inputManager = new InputManager(window, settings.keybind);
    this._staticFileLoader = new StaticFileLoader(settings.staticLoadAssets);
    this._dynamicFileLoader = new DynamicFileLoader();
    this._graphicManager = new GraphicPreprocessManager(settings.graphicLayers);
    this._collisionLayers = new CollisionPreprocessManager(settings.collisionLayers, settings.collisionPairs);
    this._achievementManager = new AchievementManager(settings.achievementStatusBlueprint, settings.achievementBlueprint);
    this._globalStore = new GlobalStore(settings.initialGlobalStore);
    this._levelManager = settings.levelManager;
    this._levelSelector = new LevelSelector(settings.levelTable, settings.initialLevel);


  }

  private initializeGame() {
    this;
  }

  private gameLoop() {
    this._requestAnimationFrameId = requestAnimationFrame(this.gameLoop.bind(this));

    const currentLevel = this._levelSelector.currentLevel();
    currentLevel.update();
  }

  /**
   * ゲームの開始コマンド
   */
  public run() {
    this._requestAnimationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
  }
}