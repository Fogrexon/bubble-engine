import { ComponentBase } from './ComponentBase';
import { CollisionLayerInfo } from '../preprocess';
import { CollisionInfo } from '../collision/CollisionInfo';

/**
 * コライダーを格納するコンポーネント
 */
export abstract class ColliderComponent extends ComponentBase {
  public readonly layer: CollisionLayerInfo;

  public collision: CollisionInfo[] = [];

  protected constructor(layer: CollisionLayerInfo) {
    super();
    this.layer = layer;
  }

  /**
   * 衝突情報をリセット
   */
  public resetCollision(): void {
    this.collision = [];
  }

  /**
   * 衝突情報を登録
   * CollisionPreprocessManagerによって登録される
   * @param collisionInfo
   */
  public registerCollision(collisionInfo: CollisionInfo): void {
    this.collision.push(collisionInfo);
  }

  protected onDestroy(): void {}

  protected onDisable(): void {}

  protected onEnable(): void {}

  protected onInitialize(): void {}

  protected onStart(): void {}

  protected onUpdate(): void {}
}
