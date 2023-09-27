import { CollisionPreprocessManager, GraphicPreprocessManager } from '../preprocess';
import { LevelManager } from '../levelControl';
import { Time } from './Time';
import { InputManager } from '../input';

export class GamePipeline {
  private readonly _time: Time;

  private readonly _inputManager: InputManager;

  private readonly _graphicManager: GraphicPreprocessManager;

  private readonly _collisionManager: CollisionPreprocessManager;

  constructor(
    time: Time,
    inputManager: InputManager,
    graphicManager: GraphicPreprocessManager,
    collisionManager: CollisionPreprocessManager
  ) {
    this._time = time;
    this._inputManager = inputManager;
    this._graphicManager = graphicManager;
    this._collisionManager = collisionManager;
  }

  public process(levelManager: LevelManager): void {
    const root = levelManager.rootEntry;

    this._time.calcDeltaTime();
    this._inputManager.updateKeyBinds();

    // preprocess
    root.transform.process();

    this._collisionManager.beforeProcess();
    root.collision.process();
    this._collisionManager.afterProcess();

    this._graphicManager.beforeProcess();
    root.graphic.process();
    this._graphicManager.afterProcess();

    // normal components
    root.update();
  }
}
