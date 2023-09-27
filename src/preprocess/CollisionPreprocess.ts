import { PreprocessBase } from './PreprocessBase';
import { ColliderComponent } from '../component';

export class CollisionPreprocess extends PreprocessBase {
  public process(deltaTime: number): void {
    if (!this.entry.enabled) return;

    const collider = this.entry.getComponent(ColliderComponent);
    if (collider && collider.enabled) {
      collider.layer.registerCollider(collider);
    }

    const childrenCollision = this.entry.transform.children.map(
      (childTransform) => childTransform.entry.collision
    );
    childrenCollision.forEach((child) => {
      child.process(deltaTime);
    });
  }
}
