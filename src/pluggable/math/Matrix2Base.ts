export abstract class Matrix2Base {
  abstract get m00(): number;

  abstract get m01(): number;

  abstract get m10(): number;

  abstract get m11(): number;

  abstract set m00(value: number);

  abstract set m01(value: number);

  abstract set m10(value: number);

  abstract set m11(value: number);

  abstract set(m00: number, m01: number, m10: number, m11: number): this;

  abstract identity(): this;

  abstract transpose(): this;

  abstract invert(): this;

  abstract determinant(): number;

  abstract add(m: Matrix2Base): this;

  abstract sub(m: Matrix2Base): this;

  abstract mul(m: Matrix2Base): this;

  abstract scale(v: number): this;

  abstract scale(v: Matrix2Base): this;

  abstract rotate(rad: number): this;

  abstract clone(): this;

  abstract copy(m: Matrix2Base): this;

  abstract equals(m: Matrix2Base): boolean;
}