import { ColliderBase } from '../collision';

export class CollisionLayerInfo {
  public colliders: ColliderBase[] = [];

  public registerCollider(collider: ColliderBase): void {
    this.colliders.push(collider);
  }
}
