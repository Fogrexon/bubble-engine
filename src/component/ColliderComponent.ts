/* eslint-disable no-use-before-define */
import { ComponentBase } from './ComponentBase';
import { CollisionLayerInfo } from '../core/preprocess';
import { CollisionInfo } from '../collision/CollisionInfo';
import { EventEmitter, IEventEmittable } from '../util';

export type CollisionEvent = {
  collisionStart: CollisionInfo;
  collisionEnd: ColliderComponent;
  collisionStay: CollisionInfo;
};

/**
 * コライダーを格納するコンポーネント
 */
export class ColliderComponent extends ComponentBase implements IEventEmittable<CollisionEvent> {
  public readonly colliderId: string = '';

  public readonly layer: CollisionLayerInfo;

  public readonly collisions: CollisionInfo[] = [];

  private readonly hitColliders: Set<ColliderComponent> = new Set<ColliderComponent>();

  private readonly tempColliders: Set<ColliderComponent> = new Set<ColliderComponent>();

  private readonly eventEmitter: EventEmitter<CollisionEvent> = new EventEmitter<CollisionEvent>();

  constructor(layer: CollisionLayerInfo) {
    super();
    this.layer = layer;
  }

  /**
   * 衝突情報をリセット
   */
  public resetCollision(): void {
    this.collisions.length = 0;
  }

  /**
   * 衝突情報を登録
   * CollisionPreprocessManagerによって登録される
   * @param collisionInfo
   */
  public registerCollision(collisionInfo: CollisionInfo): void {
    this.collisions.push(collisionInfo);
  }

  /**
   * 登録された衝突情報を整理して衝突イベントを発行する
   */
  public processCollision(): void {
    this.tempColliders.clear();

    this.collisions.forEach((collisionInfo) => {
      this.tempColliders.add(collisionInfo.collider);

      if (this.hitColliders.has(collisionInfo.collider)) {
        this.emit('collisionStay', collisionInfo);
      } else {
        this.hitColliders.add(collisionInfo.collider);
        this.emit('collisionStart', collisionInfo);
      }
    });

    // 衝突終了処理
    this.hitColliders.forEach((collider) => {
      if (!this.tempColliders.has(collider)) {
        this.hitColliders.delete(collider);
        this.emit('collisionEnd', collider);
      }
    });
  }

  protected onDestroy(): void {}

  protected onDisable(): void {}

  protected onEnable(): void {}

  protected onInitialize(): void {}

  protected onStart(): void {}

  protected onUpdate(): void {}

  // region Event Emitter implements
  private emit<K extends keyof CollisionEvent>(event: K, value: CollisionEvent[K]): void {
    this.eventEmitter.emit(event, value);
  }

  public off<K extends keyof CollisionEvent>(
    event: K,
    listener: (value: CollisionEvent[K]) => void
  ): void {
    this.eventEmitter.off(event, listener);
  }

  public on<K extends keyof CollisionEvent>(
    event: K,
    listener: (value: CollisionEvent[K]) => void
  ): void {
    this.eventEmitter.on(event, listener);
  }
  // endregion
}
