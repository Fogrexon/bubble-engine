import { ColliderComponent } from '../../component';
import {GameEntry} from '../../entry';

export class CollisionPreprocess {
  public readonly entry: GameEntry;
  
  constructor(entry: GameEntry) {
    this.entry = entry;
  }
  
  public process(): void {
    if (!this.entry.enabled) return;

    const collider = this.entry.getComponent(ColliderComponent);
    if (collider && collider.enabled) {
      collider.layer.registerCollider(collider);
      collider.resetCollision();
    }

    const childrenCollision = this.entry.transform.children.map(
      (childTransform) => childTransform.entry.collision
    );
    childrenCollision.forEach((child) => {
      child.process();
    });
  }
}
