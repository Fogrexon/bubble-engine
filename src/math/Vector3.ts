import { Vector3Base } from '../pluggable/math';

export class Vector3 {
  private i: Vector3Base;

  public get instance(): Vector3Base {
    return this.i;
  }

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.i = new Vector3Base();
    this.i.set(x, y, z);
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

  public get z(): number {
    return this.i.z;
  }

  public set z(value: number) {
    this.i.z = value;
  }

  public get length(): number {
    return this.i.length;
  }

  public get length2(): number {
    return this.i.length2;
  }

  public set(x: number, y: number, z: number): this {
    this.i.set(x, y, z);
    return this;
  }

  public add(v: Vector3): this {
    this.i.add(v.i);
    return this;
  }


}