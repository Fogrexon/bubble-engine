import { ColliderComponent } from '../component';

export class CollisionLayerInfo {
  public colliders: ColliderComponent[] = [];

  public registerCollider(collider: ColliderComponent): void {
    this.colliders.push(collider);
  }
}
