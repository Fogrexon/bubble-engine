import {Vector3Base} from './Vector3Base';

export abstract class Matrix4Base {
  abstract get m00(): number;

  abstract get m01(): number;

  abstract get m02(): number;

  abstract get m03(): number;

  abstract get m10(): number;

  abstract get m11(): number;

  abstract get m12(): number;

  abstract get m13(): number;

  abstract get m20(): number;

  abstract get m21(): number;

  abstract get m22(): number;

  abstract get m23(): number;

  abstract get m30(): number;

  abstract get m31(): number;

  abstract get m32(): number;

  abstract get m33(): number;

  abstract set m00(value: number);

  abstract set m01(value: number);

  abstract set m02(value: number);

  abstract set m03(value: number);

  abstract set m10(value: number);

  abstract set m11(value: number);

  abstract set m12(value: number);

  abstract set m13(value: number);

  abstract set m20(value: number);

  abstract set m21(value: number);

  abstract set m22(value: number);

  abstract set m23(value: number);

  abstract set m30(value: number);

  abstract set m31(value: number);

  abstract set m32(value: number);

  abstract set m33(value: number);

  abstract set(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): this;

  abstract identity(): this;

  abstract transpose(): this;

  abstract invert(): this;

  abstract determinant(): number;

  abstract add(m: Matrix4Base): this;

  abstract sub(m: Matrix4Base): this;

  abstract mul(m: Matrix4Base): this;

  abstract mul(v: Vector3Base): this;

  abstract scale(v: number | Matrix4Base): this;

  abstract scale(v: Matrix4Base): this;

  abstract rotateX(rad: number): this;

  abstract rotateY(rad: number): this;

  abstract rotateZ(rad: number): this;

  abstract rotateXYZ(x: number, y: number, z: number): this;

  abstract rotateEuler(x: number, y: number, z: number): this;

  abstract rotateAxisAngle(axis: Vector3Base, rad: number): this;

  abstract translate(v: Vector3Base): this;

  abstract translate(x: number, y: number, z: number): this;

  abstract frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): this;

  abstract perspective(fov: number, aspect: number, near: number, far: number): this;

  abstract orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): this;

  abstract lookAt(eye: Vector3Base, target: Vector3Base, up: Vector3Base): this;

  abstract clone(): this;

  abstract copy(m: Matrix4Base): this;

  abstract equals(m: Matrix4Base): boolean;
}