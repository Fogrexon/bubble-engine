import {Matrix2} from './Matrix2';
import {Matrix3} from './Matrix3';

export class Vector2 {
  public x: number;

  public y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  public set(x: number, y: number): this {
    this.x = x;
    this.y = y;
    return this;
  }

  public setFromPolar(r: number, theta: number): this {
    this.x = r * Math.cos(theta);
    this.y = r * Math.sin(theta);
    return this;
  }

  public add(v: Vector2): this {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  public addScalar(s: number): this {
    this.x += s;
    this.y += s;
    return this;
  }

  public sub(v: Vector2): this {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  public subScalar(s: number): this {
    this.x -= s;
    this.y -= s;
    return this;
  }

  public multiply(v: Vector2): this {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }

  public multiplyMat2(m: Matrix2): this {
    const {x, y} = this;
    this.x = m.m00 * x + m.m01 * y;
    this.y = m.m10 * x + m.m11 * y;
    return this;
  }

  public multiplyMat3(m: Matrix3): this {
    const {x, y} = this;
    this.x = m.m00 * x + m.m01 * y + m.m02;
    this.y = m.m10 * x + m.m11 * y + m.m12;
    return this;
  }

  public multiplyScalar(s: number): this {
    this.x *= s;
    this.y *= s;
    return this;
  }

  public divide(v: Vector2): this {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }

  public divideScalar(s: number): this {
    this.x /= s;
    this.y /= s;
    return this;
  }

  public lerp(v: Vector2, t: number): this {
    this.x += (v.x - this.x) * t;
    this.y += (v.y - this.y) * t;
    return this;
  }

  public dot(v: Vector2): number {
    return this.x * v.x + this.y * v.y;
  }

  public length(): number {
    return Math.sqrt(this.lengthSquared());
  }

  public lengthSquared(): number {
    return this.x * this.x + this.y * this.y;
  }

  public normalize(): this {
    return this.divideScalar(this.length());
  }

  public distanceTo(v: Vector2): number {
    return Math.sqrt(this.distanceToSquared(v));
  }

  public distanceToSquared(v: Vector2): number {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return dx * dx + dy * dy;
  }

  public angleTo(v: Vector2): number {
    const theta = this.dot(v) / (this.length() * v.length());
    return Math.acos(theta);
  }

  public clone(): Vector2 {
    return new Vector2().copy(this);
  }

  public copy(v: Vector2): this {
    this.x = v.x;
    this.y = v.y;
    return this;
  }

  public equals(v: Vector2): boolean {
    return this.x === v.x && this.y === v.y;
  }
}