import { ColliderBase } from './ColliderBase';
import { Vector2 } from '../../math';

export class CircleCollider extends ColliderBase {
  public radius: number = 1;

  public readonly position = new Vector2();

  public constructor(radius: number, x: number, y: number) {
    super();
    this.radius = radius;
    this.position.set(x, y);
  }
}
