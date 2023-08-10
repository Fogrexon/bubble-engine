export abstract class Vector2Base {

  abstract get x(): number;

  abstract set x(value: number);

  abstract get y(): number;

  abstract set y(value: number);

  abstract get length(): number;

  abstract get length2(): number;

  abstract set(x: number, y: number): this;

  abstract add(v: Vector2Base): this;

  abstract sub(v: Vector2Base): this;

  abstract mul(v: Vector2Base): this;

  abstract div(v: Vector2Base): this;

  abstract scale(s: number): this;

  abstract normalize(): this;

  abstract dot(v: Vector2Base): number;

  abstract cross(v: Vector2Base): number;

  abstract distance(v: Vector2Base): number;

  abstract distance2(v: Vector2Base): number;

  abstract lerp(v: Vector2Base, t: number): this;

  abstract clone(): this;

  abstract copy(v: Vector2Base): this;

  abstract equals(v: Vector2Base): boolean;
}