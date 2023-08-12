import {MathBaseRegister, Vector3Base} from '../pluggable/math';

export class Vector3 {
  public readonly instance: Vector3Base;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.instance = MathBaseRegister.get('vector3');
    this.instance.set(x, y, z);
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

  public get length(): number {
    return this.instance.length;
  }

  public get length2(): number {
    return this.instance.length2;
  }

  public set(x: number, y: number, z: number): this {
    this.instance.set(x, y, z);
    return this;
  }

  public add(v: Vector3): this {
    this.instance.add(v.instance);
    return this;
  }

  public sub(v: Vector3): this {
    this.instance.sub(v.instance);
    return this;
  }

  public mul(v: Vector3): this {
    this.instance.mul(v.instance);
    return this;
  }

  public div(v: Vector3): this {
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

  public dot(v: Vector3): number {
    return this.instance.dot(v.instance);
  }

  public cross(v: Vector3): this {
    this.instance.cross(v.instance);
    return this;
  }

  public distance(v: Vector3): number {
    return this.instance.distance(v.instance);
  }

  public distance2(v: Vector3): number {
    return this.instance.distance2(v.instance);
  }

  public lerp(v: Vector3, t: number): this {
    this.instance.lerp(v.instance, t);
    return this;
  }

  public clone(): Vector3 {
    const v = new Vector3();
    v.copy(this);
    return v;
  }

  public copy(v: Vector3): this {
    this.instance.copy(v.instance);
    return this;
  }

  public equals(v: Vector3): boolean {
    return this.instance.equals(v.instance);
  }
}