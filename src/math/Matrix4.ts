import {MathBaseRegister, Matrix4Base} from '../pluggable/math';
import {Vector3} from './Vector3';
import {Vector4} from './Vector4';

export class Matrix4 {
  public readonly instance: Matrix4Base;

  constructor(
    m00: number = 1, m01: number = 0, m02: number = 0, m03: number = 0,
    m10: number = 0, m11: number = 1, m12: number = 0, m13: number = 0,
    m20: number = 0, m21: number = 0, m22: number = 1, m23: number = 0,
    m30: number = 0, m31: number = 0, m32: number = 0, m33: number = 1
  ) {
    this.instance = MathBaseRegister.get('matrix4');
    this.instance.set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
  }

  public get m00(): number {
    return this.instance.m00;
  }

  public set m00(value: number) {
    this.instance.m00 = value;
  }

  public get m01(): number {
    return this.instance.m01;
  }

  public set m01(value: number) {
    this.instance.m01 = value;
  }

  public get m02(): number {
    return this.instance.m02;
  }

  public set m02(value: number) {
    this.instance.m02 = value;
  }

  public get m03(): number {
    return this.instance.m03;
  }

  public set m03(value: number) {
    this.instance.m03 = value;
  }

  public get m10(): number {
    return this.instance.m10;
  }

  public set m10(value: number) {
    this.instance.m10 = value;
  }

  public get m11(): number {
    return this.instance.m11;
  }

  public set m11(value: number) {
    this.instance.m11 = value;
  }

  public get m12(): number {
    return this.instance.m12;
  }

  public set m12(value: number) {
    this.instance.m12 = value;
  }

  public get m13(): number {
    return this.instance.m13;
  }

  public set m13(value: number) {
    this.instance.m13 = value;
  }

  public get m20(): number {
    return this.instance.m20;
  }

  public set m20(value: number) {
    this.instance.m20 = value;
  }

  public get m21(): number {
    return this.instance.m21;
  }

  public set m21(value: number) {
    this.instance.m21 = value;
  }

  public get m22(): number {
    return this.instance.m22;
  }

  public set m22(value: number) {
    this.instance.m22 = value;
  }

  public get m23(): number {
    return this.instance.m23;
  }

  public set m23(value: number) {
    this.instance.m23 = value;
  }

  public get m30(): number {
    return this.instance.m30;
  }

  public set m30(value: number) {
    this.instance.m30 = value;
  }

  public get m31(): number {
    return this.instance.m31;
  }

  public set m31(value: number) {
    this.instance.m31 = value;
  }

  public get m32(): number {
    return this.instance.m32;
  }

  public set m32(value: number) {
    this.instance.m32 = value;
  }

  public get m33(): number {
    return this.instance.m33;
  }

  public set m33(value: number) {
    this.instance.m33 = value;
  }

  public set(
    m00: number, m01: number, m02: number, m03: number,
    m10: number, m11: number, m12: number, m13: number,
    m20: number, m21: number, m22: number, m23: number,
    m30: number, m31: number, m32: number, m33: number
  ): this {
    this.instance.set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }

  public identity(): this {
    this.instance.identity();
    return this;
  }

  public transpose(): this {
    this.instance.transpose();
    return this;
  }

  public invert(): this {
    this.instance.invert();
    return this;
  }

  public determinant(): number {
    return this.instance.determinant();
  }

  public add(m: Matrix4): this {
    this.instance.add(m.instance);
    return this;
  }

  public sub(m: Matrix4): this {
    this.instance.sub(m.instance);
    return this;
  }

  public mul(m: Matrix4 | Vector4): this {
    this.instance.mul(m.instance);
    return this;
  }

  public scale(v: number | Matrix4): this {
    if (typeof v === 'number') this.instance.scale(v);
    else this.instance.scale(v.instance);
    return this;
  }

  public rotateX(rad: number): this {
    this.instance.rotateX(rad);
    return this;
  }

  public rotateY(rad: number): this {
    this.instance.rotateY(rad);
    return this;
  }

  public rotateZ(rad: number): this {
    this.instance.rotateZ(rad);
    return this;
  }

  public rotateXYZ(x: number, y: number, z: number): this {
    this.instance.rotateXYZ(x, y, z);
    return this;
  }

  public rotateEuler(x: number, y: number, z: number): this {
    this.instance.rotateEuler(x, y, z);
    return this;
  }

  public rotateAxisAngle(axis: Vector3, rad: number): this {
    this.instance.rotateAxisAngle(axis.instance, rad);
    return this;
  }

  public translate(v: Vector3): this {
    this.instance.translate(v.instance);
    return this;
  }

  public frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): this {
    this.instance.frustum(left, right, bottom, top, near, far);
    return this;
  }

  public perspective(fov: number, aspect: number, near: number, far: number): this {
    this.instance.perspective(fov, aspect, near, far);
    return this;
  }

  public ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): this {
    this.instance.orthographic(left, right, bottom, top, near, far);
    return this;
  }

  public lookAt(eye: Vector3, center: Vector3, up: Vector3): this {
    this.instance.lookAt(eye.instance, center.instance, up.instance);
    return this;
  }

  public copy(m: Matrix4): this {
    this.instance.copy(m.instance);
    return this;
  }

  public clone(): Matrix4 {
    return new Matrix4().copy(this);
  }

  public equals(m: Matrix4): boolean {
    return this.instance.equals(m.instance);
  }
}