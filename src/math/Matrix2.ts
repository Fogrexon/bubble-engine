import {MathBaseRegister, Matrix2Base} from '../pluggable/math';

export class Matrix2 {
  public readonly instance: Matrix2Base;

  constructor(
    m00: number = 1,
    m01: number = 0,
    m10: number = 0,
    m11: number = 1
  ) {
    this.instance = MathBaseRegister.get('matrix2');
    this.instance.set(m00, m01, m10, m11);
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

  public set(m00: number, m01: number, m10: number, m11: number): this {
    this.instance.set(m00, m01, m10, m11);
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

  public add(m: Matrix2): this {
    this.instance.add(m.instance);
    return this;
  }

  public sub(m: Matrix2): this {
    this.instance.sub(m.instance);
    return this;
  }

  public mul(m: Matrix2): this {
    this.instance.mul(m.instance);
    return this;
  }

  public scale(v: number | Matrix2): this {
    if (v instanceof Matrix2) this.instance.scale(v.instance);
    else this.instance.scale(v);
    return this;
  }

  public rotate(rad: number): this {
    this.instance.rotate(rad);
    return this;
  }

  public clone(): Matrix2 {
    return new Matrix2().copy(this);
  }

  public copy(m: Matrix2): this {
    this.instance.copy(m.instance);
    return this;
  }

  public equals(m: Matrix2): boolean {
    return this.instance.equals(m.instance);
  }
}