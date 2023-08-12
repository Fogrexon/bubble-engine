import {MathBaseRegister, Vector2Base} from '../pluggable/math';

export class Vector2 {
  public readonly instance: Vector2Base;

  constructor(x: number = 0, y: number = 0) {
    this.instance = MathBaseRegister.get('vector2');
    this.instance.set(x, y);
  }

  public get x(): number {
    return this.instance.x;
  }

  public set x(value: number) {
    this.instance.x = value;
  }

  public get y(): number {
    return this.instance.y;
  }

  public set y(value: number) {
    this.instance.y = value;
  }

  public get length(): number {
    return this.instance.length;
  }

  public get length2(): number {
    return this.instance.length2;
  }

  public set(x: number, y: number): this {
    this.instance.set(x, y);
    return this;
  }

  public add(v: Vector2): this {
    this.instance.add(v.instance);
    return this;
  }

  public sub(v: Vector2): this {
    this.instance.sub(v.instance);
    return this;
  }

  public mul(v: Vector2): this {
    this.instance.mul(v.instance);
    return this;
  }

  public div(v: Vector2): this {
    this.instance.div(v.instance);
    return this;
  }

  public scale(s: number): this {
    this.instance.scale(s);
    return this;
  }

  public normalize(): this {
    this.instance.normalize();
    return this;
  }

  public dot(v: Vector2): number {
    return this.instance.dot(v.instance);
  }

  public cross(v: Vector2): number {
    return this.instance.cross(v.instance);
  }

  public distance(v: Vector2): number {
    return this.instance.distance(v.instance);
  }

  public distance2(v: Vector2): number {
    return this.instance.distance2(v.instance);
  }

  public lerp(v: Vector2, t: number): this {
    this.instance.lerp(v.instance, t);
    return this;
  }

  public clone(): this {
    return new Vector2(this.x, this.y) as this;
  }

  public copy(v: Vector2): this {
    this.instance.copy(v.instance);
    return this;
  }

  public equals(v: Vector2): boolean {
    return this.instance.equals(v.instance);
  }
}