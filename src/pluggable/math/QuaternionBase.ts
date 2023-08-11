import {Vector3Base} from './Vector3Base';
import {Matrix4Base} from './Matrix4Base';

export abstract class QuaternionBase {
  abstract get x(): number;

  abstract get y(): number;

  abstract get z(): number;

  abstract get w(): number;

  abstract set x(value: number);

  abstract set y(value: number);

  abstract set z(value: number);

  abstract set w(value: number);

  abstract set(x: number, y: number, z: number, w: number): this;

  abstract set(q: QuaternionBase): this;

  abstract setFromEuler(euler: Vector3Base): this;

  abstract setFromAxisAngle(axis: Vector3Base, angle: number): this;

  abstract setFromRotationMatrix(m: Matrix4Base): this;

  abstract setFromUnitVectors(vFrom: Vector3Base, vTo: Vector3Base): this;

  abstract inverse(): this;

  abstract conjugate(): this;

  abstract dot(v: QuaternionBase): number;

  abstract lengthSq(): number;

  abstract length(): number;

  abstract normalize(): this;

  abstract multiply(q: QuaternionBase): this;

  abstract premultiply(q: QuaternionBase): this;

  abstract multiplyQuaternions(a: QuaternionBase, b: QuaternionBase): this;

  abstract slerp(qb: QuaternionBase, t: number): this;

  abstract clone(): QuaternionBase;

  abstract copy(q: QuaternionBase): this;

  abstract equals(v: QuaternionBase): boolean;
}