export abstract class Matrix3Base {
  abstract get m00(): number;

  abstract get m01(): number;

  abstract get m02(): number;

  abstract get m10(): number;

  abstract get m11(): number;

  abstract get m12(): number;

  abstract get m20(): number;

  abstract get m21(): number;

  abstract get m22(): number;

  abstract set m00(value: number);

  abstract set m01(value: number);

  abstract set m02(value: number);

  abstract set m10(value: number);

  abstract set m11(value: number);

  abstract set m12(value: number);

  abstract set m20(value: number);

  abstract set m21(value: number);

  abstract set m22(value: number);

  abstract set(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): this;

  abstract identity(): this;

  abstract transpose(): this;

  abstract invert(): this;

  abstract determinant(): number;

  abstract add(m: Matrix3Base): this;

  abstract sub(m: Matrix3Base): this;

  abstract mul(m: Matrix3Base): this;

  abstract scale(v: number): this;

  abstract scale(v: Matrix3Base): this;

  abstract rotateX(rad: number): this;

  abstract rotateY(rad: number): this;

  abstract rotateZ(rad: number): this;

  abstract clone(): Matrix3Base;

  abstract copy(m: Matrix3Base): this;

  abstract equals(m: Matrix3Base): boolean;
}