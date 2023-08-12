import {Vector3} from './Vector3';
import {Matrix4} from './Matrix4';
import {MathBaseRegister, QuaternionBase} from '../pluggable/math';

export class Quaternion {
  public readonly instance: QuaternionBase;

  constructor(x: number = 0, y: number = 0, z: number = 0, w: number = 1) {
    this.instance = MathBaseRegister.get('quaternion');
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

  public set(x: number, y: number, z: number, w: number): this {
    this.instance.set(x, y, z, w);
    return this;
  }

  public setFromEuler(euler: Vector3): this {
    this.instance.setFromEuler(euler.instance);
    return this;
  }

  public setFromAxisAngle(axis: Vector3, angle: number): this {
    this.instance.setFromAxisAngle(axis.instance, angle);
    return this;
  }

  public setFromRotationMatrix(m: Matrix4): this {
    this.instance.setFromRotationMatrix(m.instance);
    return this;
  }

  public setFromUnitVectors(vFrom: Vector3, vTo: Vector3): this {
    this.instance.setFromUnitVectors(vFrom.instance, vTo.instance);
    return this;
  }

  public inverse(): this {
    this.instance.inverse();
    return this;
  }

  public conjugate(): this {
    this.instance.conjugate();
    return this;
  }

  public dot(v: Quaternion): number {
    return this.instance.dot(v.instance);
  }

  public lengthSq(): number {
    return this.instance.lengthSq();
  }

  public length(): number {
    return this.instance.length();
  }

  public normalize(): this {
    this.instance.normalize();
    return this;
  }

  public multiply(q: Quaternion): this {
    this.instance.multiply(q.instance);
    return this;
  }

  public premultiply(q: Quaternion): this {
    this.instance.premultiply(q.instance);
    return this;
  }

  public multiplyQuaternions(a: Quaternion, b: Quaternion): this {
    this.instance.multiplyQuaternions(a.instance, b.instance);
    return this;
  }

  public slerp(qb: Quaternion, t: number): this {
    this.instance.slerp(qb.instance, t);
    return this;
  }

  public clone(): Quaternion {
    return new Quaternion().copy(this);
  }

  public copy(q: Quaternion): this {
    this.instance.copy(q.instance);
    return this;
  }

  public equals(v: Quaternion): boolean {
    return this.instance.equals(v.instance);
  }
}
