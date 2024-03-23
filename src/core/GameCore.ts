import {InputKeybind, InputManager} from './input';
import {AssetBase, DynamicFileLoader, FileType, StaticFileLoader} from './loader';
import {AchievementBlueprintTable, AchievementManager, AchievementStatusBlueprintTable} from './achievement';
import {CollisionManager, GraphicManager} from './preprocess';
import {GlobalStore} from './store';
import {GameEntry} from '../entry';
import {LevelManager, LevelSelector} from './level';
import {Time} from './time';

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
  T10 extends string[] = string[],
  T11 extends T10[number] = T10[number],
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
  levelIds: T10;
  initialLevel: T11;
  wrapper: HTMLElement;
}


export type GameApi<T extends GameCoreSettings = GameCoreSettings> = {
  readonly inputManager: InputManager<T['keybind']>
  readonly staticFileLoader: StaticFileLoader<T['staticLoadAssets']>
  readonly dynamicFileLoader: DynamicFileLoader
  readonly graphicManager: GraphicManager<T['graphicLayers']>
  readonly collisionLayers: CollisionManager<T['collisionLayers'], T['collisionPairs']>
  readonly achievementManager: AchievementManager<T['achievementStatusBlueprint'], T['achievementBlueprint']>
  readonly globalStore: GlobalStore<T['initialGlobalStore']>
  readonly levelManager: T['levelManager']
  readonly levelSelector: LevelSelector<T['levelIds'][number]>
  readonly time: Time
}

export type LevelTable<T extends GameCoreSettings = GameCoreSettings> = Record<string, (api: GameApi<T>) => GameEntry>;

export type CreateEntryFunc<T extends GameCoreSettings> = (api: GameApi<T>) => GameEntry;

export class GameCore<T extends GameCoreSettings = GameCoreSettings> {

  private _originalSettings: T;

  private _api: GameApi<T>;

  private _requestAnimationFrameId: number = -1;

  constructor(settings: T, levelTable: Record<T['levelIds'][number], (api: GameApi<T>) => GameEntry>) {
    this._originalSettings = settings;
    this._api = {
      inputManager: new InputManager(window, settings.keybind),
      staticFileLoader: new StaticFileLoader(settings.staticLoadAssets),
      dynamicFileLoader: new DynamicFileLoader(),
      graphicManager: new GraphicManager(settings.graphicLayers, settings.wrapper),
      collisionLayers: new CollisionManager(settings.collisionLayers, settings.collisionPairs),
      achievementManager: new AchievementManager(settings.achievementStatusBlueprint, settings.achievementBlueprint),
      globalStore: new GlobalStore(settings.initialGlobalStore),
      levelManager: settings.levelManager,
      levelSelector: new LevelSelector(),
      time: new Time()
    };

    this._api.levelSelector.initializeLevels(this._api, levelTable, settings.initialLevel);
  }

  private gameLoop(deltaTime: number) {
    this._requestAnimationFrameId = requestAnimationFrame(this.gameLoop.bind(this));

    const root = this._api.levelSelector.currentLevel();

    this._api.time.calcDeltaTime(deltaTime / 1000);

    this._api.inputManager.updateKeyBinds();

    root.transform.process();

    this._api.collisionLayers.beforeProcess();
    root.collision.process();
    this._api.collisionLayers.afterProcess();

    this._api.graphicManager.beforeProcess();
    root.graphic.process();
    this._api.graphicManager.afterProcess();

    root.update();

    this._api.levelSelector.postProcess();
  }

  /**
   * ゲームの開始コマンド
   */
  public run() {
    this._api.time.reset(performance.now());
    this._requestAnimationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
  }
}

export type GameEntryFunc<T extends GameCoreSettings> = (core: GameCore<T>) => GameEntry;
