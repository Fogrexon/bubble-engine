import { ComponentBase } from './ComponentBase';
import { ColliderBase } from '../collision';
import { CollisionLayerInfo } from '../preprocess';
/**
 * コライダーを格納するコンポーネント
 */
export declare class ColliderComponent extends ComponentBase {
    colliders: ColliderBase[];
    readonly layer: CollisionLayerInfo;
    constructor(colliders: ColliderBase[], layer: CollisionLayerInfo);
    protected onDestroy(): void;
    protected onDisable(): void;
    protected onEnable(): void;
    protected onInitialize(): void;
    protected onStart(): void;
    protected onUpdate(): void;
}
