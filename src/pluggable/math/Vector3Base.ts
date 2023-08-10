export abstract class Vector3Base {
  abstract get x(): number;

  abstract set x(value: number);

  abstract get y(): number;

  abstract set y(value: number);

  abstract get z(): number;

  abstract set z(value: number);

  abstract get length(): number;

  abstract get length2(): number;

  abstract set(x: number, y: number, z: number): this;

  abstract add(v: Vector3Base): this;

  abstract sub(v: Vector3Base): this;

  abstract mul(v: Vector3Base): this;

  abstract div(v: Vector3Base): this;

  abstract scale(s: number): this;

  abstract normalize(): this;

  abstract dot(v: Vector3Base): number;

  abstract cross(v: Vector3Base): this;

  abstract distance(v: Vector3Base): number;

  abstract distance2(v: Vector3Base): number;

  abstract lerp(v: Vector3Base, t: number): this;

  abstract clone(): this;

  abstract copy(v: Vector3Base): this;

  abstract equals(v: Vector3Base): boolean;
  
}