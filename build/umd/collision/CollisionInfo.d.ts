import { ColliderComponent } from '../component';
import { Vector2 } from '../math';
export type CollisionInfo = {
    collider: ColliderComponent;
    hitPoint: Vector2;
};
