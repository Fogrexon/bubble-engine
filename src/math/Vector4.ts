import {MathBaseRegister, Vector4Base} from '../pluggable/math';

export class Vector4 {
  public readonly instance: Vector4Base;

  constructor(x: number = 0, y: number = 0, z: number = 0, w: number = 0) {
    this.instance = MathBaseRegister.get('vector4');
    this.instance.set(x, y, z, w);
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

  public get z(): number {
    return this.instance.z;
  }

  public set z(value: number) {
    this.instance.z = value;
  }

  public get w(): number {
    return this.instance.w;
  }

  public set w(value: number) {
    this.instance.w = value;
  }

  public get length(): number {
    return this.instance.length;
  }

  public get length2(): number {
    return this.instance.length2;
  }

  public set(x: number, y: number, z: number, w: number): this {
    this.instance.set(x, y, z, w);
    return this;
  }

  public add(v: Vector4): this {
    this.instance.add(v.instance);
    return this;
  }

  public sub(v: Vector4): this {
    this.instance.sub(v.instance);
    return this;
  }

  public mul(v: Vector4): this {
    this.instance.mul(v.instance);
    return this;
  }

  public div(v: Vector4): this {
    this.instance.div(v.instance);
    return this;
  }

  public scale(v: number): this {
    this.instance.scale(v);
    return this;
  }

  public normalize(): this {
    this.instance.normalize();
    return this;
  }

  public dot(v: Vector4): number {
    return this.instance.dot(v.instance);
  }

  public distance(v: Vector4): number {
    return this.instance.distance(v.instance);
  }

  public distance2(v: Vector4): number {
    return this.instance.distance2(v.instance);
  }

  public lerp(v: Vector4, t: number): this {
    this.instance.lerp(v.instance, t);
    return this;
  }

  public clone(): Vector4 {
    return new Vector4(this.x, this.y, this.z, this.w);
  }

  public copy(v: Vector4): this {
    this.instance.copy(v.instance);
    return this;
  }

  public equals(v: Vector4): boolean {
    return this.instance.equals(v.instance);
  }
}