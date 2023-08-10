import {MathBaseRegister, Vector2Base} from '../pluggable/math';

export class Vector2 {
  private i: Vector2Base;

  public get instance(): Vector2Base {
    return this.i;
  }

  constructor(x: number = 0, y: number = 0) {
    this.i = MathBaseRegister.get('vector2');
    this.i.set(x, y);
  }

  public get x(): number {
    return this.i.x;
  }

  public set x(value: number) {
    this.i.x = value;
  }

  public get y(): number {
    return this.i.y;
  }

  public set y(value: number) {
    this.i.y = value;
  }

  public get length(): number {
    return this.i.length;
  }

  public get length2(): number {
    return this.i.length2;
  }

  public set(x: number, y: number): this {
    this.i.set(x, y);
    return this;
  }

  public add(v: Vector2): this {
    this.i.add(v.i);
    return this;
  }

  public sub(v: Vector2): this {
    this.i.sub(v.i);
    return this;
  }

  public mul(v: Vector2): this {
    this.i.mul(v.i);
    return this;
  }

  public div(v: Vector2): this {
    this.i.div(v.i);
    return this;
  }

  public scale(s: number): this {
    this.i.scale(s);
    return this;
  }

  public normalize(): this {
    this.i.normalize();
    return this;
  }

  public dot(v: Vector2): number {
    return this.i.dot(v.i);
  }

  public cross(v: Vector2): number {
    return this.i.cross(v.i);
  }

  public distance(v: Vector2): number {
    return this.i.distance(v.i);
  }

  public distance2(v: Vector2): number {
    return this.i.distance2(v.i);
  }

  public lerp(v: Vector2, t: number): this {
    this.i.lerp(v.i, t);
    return this;
  }

  public clone(): this {
    return new Vector2(this.x, this.y) as this;
  }

  public copy(v: Vector2): this {
    this.i.copy(v.i);
    return this;
  }

  public equals(v: Vector2): boolean {
    return this.i.equals(v.i);
  }
}