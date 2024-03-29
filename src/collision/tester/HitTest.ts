import { Vector2 } from '../../math';
import { ColliderComponent } from '../../component';

export type HitTest<T1 extends ColliderComponent = ColliderComponent, T2 extends ColliderComponent = ColliderComponent> = (
  a: T1,
  b: T2,
  hitPoint: Vector2
) => boolean;
