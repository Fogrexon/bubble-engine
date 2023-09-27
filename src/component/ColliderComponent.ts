import { ComponentBase } from './ComponentBase';
import { ColliderBase } from '../collision';
import { CollisionLayerInfo } from '../preprocess/CollisionLayerInfo';

/**
 * コライダーを格納するコンポーネント
 */
export class ColliderComponent extends ComponentBase {
  public colliders: ColliderBase[];

  public readonly layer: CollisionLayerInfo;

  constructor(colliders: ColliderBase[], layer: CollisionLayerInfo) {
    super();
    this.colliders = colliders;
    this.layer = layer;
  }

  protected onDestroy(): void {}

  protected onDisable(): void {}

  protected onEnable(): void {}

  protected onInitialize(): void {}

  protected onStart(): void {}

  protected onUpdate(): void {}
}
