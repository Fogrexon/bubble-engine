import { ColliderBase } from '../collider';
import { Vector2 } from '../../math';
export type HitTest<T1 extends ColliderBase, T2 extends ColliderBase> = (a: T1, b: T2, hitPoint: Vector2) => boolean;
