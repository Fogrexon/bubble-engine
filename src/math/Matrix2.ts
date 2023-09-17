export class Matrix2 {
  public m00: number;

  public m01: number;

  public m10: number;

  public m11: number;

  constructor(m00: number = 1, m01: number = 0, m10: number = 0, m11: number = 1) {
    this.m00 = m00;
    this.m01 = m01;
    this.m10 = m10;
    this.m11 = m11;
  }

  public set(m00: number, m01: number, m10: number, m11: number): this {
    this.m00 = m00;
    this.m01 = m01;
    this.m10 = m10;
    this.m11 = m11;
    return this;
  }

  public identity(): this {
    this.set(1, 0, 0, 1);
    return this;
  }

  public transpose(): this {
    const { m01 } = this;
    this.m01 = this.m10;
    this.m10 = m01;
    return this;
  }

  public invert(): this {
    const { m00, m01, m10, m11 } = this;
    const det = this.determinant();
    if (det === 0) {
      return this.identity();
    }
    const detInv = 1 / det;
    this.set(m11 * detInv, -m01 * detInv, -m10 * detInv, m00 * detInv);
    return this;
  }

  public determinant(): number {
    return this.m00 * this.m11 - this.m01 * this.m10;
  }

  public add(m: Matrix2): this {
    this.m00 += m.m00;
    this.m01 += m.m01;
    this.m10 += m.m10;
    this.m11 += m.m11;
    return this;
  }

  public addScalar(s: number): this {
    this.m00 += s;
    this.m01 += s;
    this.m10 += s;
    this.m11 += s;
    return this;
  }

  public sub(m: Matrix2): this {
    this.m00 -= m.m00;
    this.m01 -= m.m01;
    this.m10 -= m.m10;
    this.m11 -= m.m11;
    return this;
  }

  public subScalar(s: number): this {
    this.m00 -= s;
    this.m01 -= s;
    this.m10 -= s;
    this.m11 -= s;
    return this;
  }

  public multiply(m: Matrix2): this {
    const { m00, m01, m10, m11 } = this;
    this.m00 = m00 * m.m00 + m01 * m.m10;
    this.m01 = m00 * m.m01 + m01 * m.m11;
    this.m10 = m10 * m.m00 + m11 * m.m10;
    this.m11 = m10 * m.m01 + m11 * m.m11;
    return this;
  }

  public scale(m: Matrix2): this {
    this.m00 *= m.m00;
    this.m01 *= m.m01;
    this.m10 *= m.m10;
    this.m11 *= m.m11;
    return this;
  }

  public scaleScalar(v: number): this {
    this.m00 *= v;
    this.m01 *= v;
    this.m10 *= v;
    this.m11 *= v;
    return this;
  }

  public rotate(rad: number): this {
    const { m00, m01, m10, m11 } = this;
    const c = Math.cos(rad);
    const s = Math.sin(rad);
    this.m00 = m00 * c + m01 * s;
    this.m01 = m00 * -s + m01 * c;
    this.m10 = m10 * c + m11 * s;
    this.m11 = m10 * -s + m11 * c;
    return this;
  }

  public clone(): Matrix2 {
    return new Matrix2().copy(this);
  }

  public copy(m: Matrix2): this {
    this.m00 = m.m00;
    this.m01 = m.m01;
    this.m10 = m.m10;
    this.m11 = m.m11;
    return this;
  }

  public equals(m: Matrix2): boolean {
    return this.m00 === m.m00 && this.m01 === m.m01 && this.m10 === m.m10 && this.m11 === m.m11;
  }
}
