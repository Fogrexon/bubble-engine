export class Matrix3 {
  public m00: number;

  public m01: number;

  public m02: number;

  public m10: number;

  public m11: number;

  public m12: number;

  public m20: number;

  public m21: number;

  public m22: number;

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
    this.m00 = m00;
    this.m01 = m01;
    this.m02 = m02;
    this.m10 = m10;
    this.m11 = m11;
    this.m12 = m12;
    this.m20 = m20;
    this.m21 = m21;
    this.m22 = m22;
  }

  public set(
    m00: number,
    m01: number,
    m02: number,
    m10: number,
    m11: number,
    m12: number,
    m20: number,
    m21: number,
    m22: number
  ): this {
    this.m00 = m00;
    this.m01 = m01;
    this.m02 = m02;
    this.m10 = m10;
    this.m11 = m11;
    this.m12 = m12;
    this.m20 = m20;
    this.m21 = m21;
    this.m22 = m22;
    return this;
  }

  public identity(): this {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this;
  }

  public transpose(): this {
    const {m01, m02, m10, m12, m20, m21} = this;
    this.m01 = m10;
    this.m02 = m20;
    this.m10 = m01;
    this.m12 = m21;
    this.m20 = m02;
    this.m21 = m12;
    return this;
  }

  public invert(): this {
    const {m00, m01, m02, m10, m11, m12, m20, m21, m22} = this;
    const det = this.determinant();
    if (det === 0) {
      return this.identity();
    }
    const detInv = 1 / det;
    this.set(
      (m11 * m22 - m12 * m21) * detInv,
      -(m01 * m22 - m02 * m21) * detInv,
      (m01 * m12 - m02 * m11) * detInv,
      -(m10 * m22 - m12 * m20) * detInv,
      (m00 * m22 - m02 * m20) * detInv,
      -(m00 * m12 - m02 * m10) * detInv,
      (m10 * m21 - m11 * m20) * detInv,
      -(m00 * m21 - m01 * m20) * detInv,
      (m00 * m11 - m01 * m10) * detInv
    );
    return this;
  }

  public determinant(): number {
    const {m00, m01, m02, m10, m11, m12, m20, m21, m22} = this;
    return (
      m00 * (m11 * m22 - m12 * m21) -
      m01 * (m10 * m22 - m12 * m20) +
      m02 * (m10 * m21 - m11 * m20)
    );
  }

  public add(m: Matrix3): this {
    this.m00 += m.m00;
    this.m01 += m.m01;
    this.m02 += m.m02;
    this.m10 += m.m10;
    this.m11 += m.m11;
    this.m12 += m.m12;
    this.m20 += m.m20;
    this.m21 += m.m21;
    this.m22 += m.m22;
    return this;
  }

  public addScalar(s: number): this {
    this.m00 += s;
    this.m01 += s;
    this.m02 += s;
    this.m10 += s;
    this.m11 += s;
    this.m12 += s;
    this.m20 += s;
    this.m21 += s;
    this.m22 += s;
    return this;
  }

  public sub(m: Matrix3): this {
    this.m00 -= m.m00;
    this.m01 -= m.m01;
    this.m02 -= m.m02;
    this.m10 -= m.m10;
    this.m11 -= m.m11;
    this.m12 -= m.m12;
    this.m20 -= m.m20;
    this.m21 -= m.m21;
    this.m22 -= m.m22;
    return this;
  }

  public subScalar(s: number): this {
    this.m00 -= s;
    this.m01 -= s;
    this.m02 -= s;
    this.m10 -= s;
    this.m11 -= s;
    this.m12 -= s;
    this.m20 -= s;
    this.m21 -= s;
    this.m22 -= s;
    return this;
  }

  public multiply(m: Matrix3): this {
    const {m00, m01, m02, m10, m11, m12, m20, m21, m22} = this;
    this.set(
      m00 * m.m00 + m01 * m.m10 + m02 * m.m20,
      m00 * m.m01 + m01 * m.m11 + m02 * m.m21,
      m00 * m.m02 + m01 * m.m12 + m02 * m.m22,
      m10 * m.m00 + m11 * m.m10 + m12 * m.m20,
      m10 * m.m01 + m11 * m.m11 + m12 * m.m21,
      m10 * m.m02 + m11 * m.m12 + m12 * m.m22,
      m20 * m.m00 + m21 * m.m10 + m22 * m.m20,
      m20 * m.m01 + m21 * m.m11 + m22 * m.m21,
      m20 * m.m02 + m21 * m.m12 + m22 * m.m22
    );
    return this;
  }

  public scale(m: Matrix3): this {
    this.m00 *= m.m00;
    this.m01 *= m.m01;
    this.m02 *= m.m02;
    this.m10 *= m.m10;
    this.m11 *= m.m11;
    this.m12 *= m.m12;
    this.m20 *= m.m20;
    this.m21 *= m.m21;
    this.m22 *= m.m22;
    return this;
  }

  public scaleScalar(v: number): this {
    this.m00 *= v;
    this.m01 *= v;
    this.m02 *= v;
    this.m10 *= v;
    this.m11 *= v;
    this.m12 *= v;
    this.m20 *= v;
    this.m21 *= v;
    this.m22 *= v;
    return this;
  }

  public rotateMat2D(radian: number): this {
    const cos = Math.cos(radian);
    const sin = Math.sin(radian);
    const {m00, m01, m02, m10, m11, m12, m20, m21, m22} = this;
    this.set(
      m00 * cos + m01 * sin,
      m00 * -sin + m01 * cos,
      m02,
      m10 * cos + m11 * sin,
      m10 * -sin + m11 * cos,
      m12,
      m20 * cos + m21 * sin,
      m20 * -sin + m21 * cos,
      m22
    );
    return this;
  }

  public translateMat2D(x: number, y: number): this {
    const {m00, m01, m02, m10, m11, m12, m20, m21, m22} = this;
    this.set(
      m00,
      m01,
      m02 + x,
      m10,
      m11,
      m12 + y,
      m20,
      m21,
      m22
    );
    return this;
  }

  public scaleMat2D(x: number, y: number): this {
    const {m00, m01, m02, m10, m11, m12, m20, m21, m22} = this;
    this.set(
      m00 * x,
      m01 * y,
      m02,
      m10 * x,
      m11 * y,
      m12,
      m20 * x,
      m21 * y,
      m22
    );
    return this;
  }

  public clone() {
    return new Matrix3().copy(this);
  }

  public copy(m: Matrix3) {
    this.m00 = m.m00;
    this.m01 = m.m01;
    this.m02 = m.m02;
    this.m10 = m.m10;
    this.m11 = m.m11;
    this.m12 = m.m12;
    this.m20 = m.m20;
    this.m21 = m.m21;
    this.m22 = m.m22;
    return this;
  }

  public equals(m: Matrix3) {
    return (
      this.m00 === m.m00 &&
      this.m01 === m.m01 &&
      this.m02 === m.m02 &&
      this.m10 === m.m10 &&
      this.m11 === m.m11 &&
      this.m12 === m.m12 &&
      this.m20 === m.m20 &&
      this.m21 === m.m21 &&
      this.m22 === m.m22
    );
  }
}