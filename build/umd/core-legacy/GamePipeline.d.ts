import { CollisionPreprocessManager, GraphicPreprocessManager } from '../core/preprocess';
import { LevelManager } from '../levelControl';
import { Time } from './Time';
import { InputManager } from '../core/input';
export declare class GamePipeline {
    private readonly _time;
    private readonly _inputManager;
    private readonly _graphicManager;
    private readonly _collisionManager;
    constructor(time: Time, inputManager: InputManager, graphicManager: GraphicPreprocessManager, collisionManager: CollisionPreprocessManager);
    process(levelManager: LevelManager): void;
}
