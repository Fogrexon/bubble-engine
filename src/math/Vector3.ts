import {Matrix3} from './Matrix3';

export class Vector3 {
  public x: number;

  public y: number;

  public z: number;

  public constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public set(x: number, y: number, z: number): this {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  public setFromSpherical(r: number, theta: number, phi: number): this {
    const sinPhiRadius = Math.sin(phi) * r;
    this.x = sinPhiRadius * Math.sin(theta);
    this.y = Math.cos(phi) * r;
    this.z = sinPhiRadius * Math.cos(theta);
    return this;
  }

  public add(v: Vector3): this {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  public addScalar(s: number): this {
    this.x += s;
    this.y += s;
    this.z += s;
    return this;
  }

  public sub(v: Vector3): this {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  public subScalar(s: number): this {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    return this;
  }

  public multiply(v: Vector3): this {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  }

  public multiplyMat3(m: Matrix3): this {
    const {x, y, z} = this;
    this.x = m.m00 * x + m.m01 * y + m.m02 * z;
    this.y = m.m10 * x + m.m11 * y + m.m12 * z;
    this.z = m.m20 * x + m.m21 * y + m.m22 * z;
    return this;
  }

  public multiplyScalar(s: number): this {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }

  public divide(v: Vector3): this {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  }

  public divideScalar(s: number): this {
    this.x /= s;
    this.y /= s;
    this.z /= s;
    return this;
  }

  public lerp(v: Vector3, t: number): this {
    this.x += (v.x - this.x) * t;
    this.y += (v.y - this.y) * t;
    this.z += (v.z - this.z) * t;
    return this;
  }

  public dot(v: Vector3): number {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  public cross(v: Vector3): this {
    const {x, y, z} = this;
    this.x = y * v.z - z * v.y;
    this.y = z * v.x - x * v.z;
    this.z = x * v.y - y * v.x;
    return this;
  }

  public lengthSquared(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  public length(): number {
    return Math.sqrt(this.lengthSquared());
  }

  public normalize(): this {
    this.divideScalar(this.length());
    return this;
  }

  public distanceTo(v: Vector3): number {
    return Math.sqrt(this.distanceToSquared(v));
  }

  public distanceToSquared(v: Vector3): number {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    const dz = this.z - v.z;
    return dx * dx + dy * dy + dz * dz;
  }

  public clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }

  public copy(v: Vector3): this {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
  }

  public equals(v: Vector3): boolean {
    return this.x === v.x && this.y === v.y && this.z === v.z;
  }
}