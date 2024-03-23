import { ComponentBase } from './ComponentBase';
import { CollisionLayerInfo } from '../core/preprocess';
import { CollisionInfo } from '../collision/CollisionInfo';
import { IEventEmittable } from '../util';
export type CollisionEvent = {
    collisionStart: CollisionInfo;
    collisionEnd: ColliderComponent;
    collisionStay: CollisionInfo;
};
/**
 * コライダーを格納するコンポーネント
 */
export declare class ColliderComponent extends ComponentBase implements IEventEmittable<CollisionEvent> {
    readonly colliderId: string;
    readonly layer: CollisionLayerInfo;
    readonly collisions: CollisionInfo[];
    private readonly hitColliders;
    private readonly tempColliders;
    private readonly eventEmitter;
    constructor(layer: CollisionLayerInfo);
    /**
     * 衝突情報をリセット
     */
    resetCollision(): void;
    /**
     * 衝突情報を登録
     * CollisionPreprocessManagerによって登録される
     * @param collisionInfo
     */
    registerCollision(collisionInfo: CollisionInfo): void;
    /**
     * 登録された衝突情報を整理して衝突イベントを発行する
     */
    processCollision(): void;
    protected onDestroy(): void;
    protected onDisable(): void;
    protected onEnable(): void;
    protected onInitialize(): void;
    protected onStart(): void;
    protected onUpdate(): void;
    private emit;
    off<K extends keyof CollisionEvent>(event: K, listener: (value: CollisionEvent[K]) => void): void;
    on<K extends keyof CollisionEvent>(event: K, listener: (value: CollisionEvent[K]) => void): void;
}
