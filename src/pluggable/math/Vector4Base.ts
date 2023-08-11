export abstract class Vector4Base {
  abstract get x(): number;

  abstract set x(value: number);

  abstract get y(): number;

  abstract set y(value: number);

  abstract get z(): number;

  abstract set z(value: number);

  abstract get w(): number;

  abstract set w(value: number);

  abstract get length(): number;

  abstract get length2(): number;

  abstract set(x: number, y: number, z: number, w: number): this;

  abstract add(v: Vector4Base): this;

  abstract sub(v: Vector4Base): this;

  abstract mul(v: Vector4Base): this;

  abstract div(v: Vector4Base): this;

  abstract scale(s: number): this;

  abstract normalize(): this;

  abstract dot(v: Vector4Base): number;

  abstract distance(v: Vector4Base): number;

  abstract distance2(v: Vector4Base): number;

  abstract lerp(v: Vector4Base, t: number): this;

  abstract clone(): Vector4Base;

  abstract copy(v: Vector4Base): this;

  abstract equals(v: Vector4Base): boolean;
}