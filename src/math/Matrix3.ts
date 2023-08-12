import {MathBaseRegister, Matrix3Base} from '../pluggable/math';

export class Matrix3 {
  public readonly instance: Matrix3Base;

  constructor(
    m00: number = 1,
    m01: number = 0,
    m02: number = 0,
    m10: number = 0,
    m11: number = 1,
    m12: number = 0,
    m20: number = 0,
    m21: number = 0,
    m22: number = 1
  ) {
    this.instance = MathBaseRegister.get('matrix3');
    this.instance.set(m00, m01, m02, m10, m11, m12, m20, m21, m22);
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

  public set(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): this {
    this.instance.set(m00, m01, m02, m10, m11, m12, m20, m21, m22);
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

  public add(m: Matrix3): this {
    this.instance.add(m.instance);
    return this;
  }

  public sub(m: Matrix3): this {
    this.instance.sub(m.instance);
    return this;
  }

  public mul(m: Matrix3): this {
    this.instance.mul(m.instance);
    return this;
  }

  public scale(v: number | Matrix3): this {
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

  public clone(): Matrix3 {
    return new Matrix3().copy(this);
  }

  public copy(m: Matrix3): this {
    this.instance.copy(m.instance);
    return this;
  }

  public equals(m: Matrix3): boolean {
    return this.instance.equals(m.instance);
  }
}