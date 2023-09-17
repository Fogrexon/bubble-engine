export declare class Matrix2 {
    m00: number;
    m01: number;
    m10: number;
    m11: number;
    constructor(m00?: number, m01?: number, m10?: number, m11?: number);
    set(m00: number, m01: number, m10: number, m11: number): this;
    identity(): this;
    transpose(): this;
    invert(): this;
    determinant(): number;
    add(m: Matrix2): this;
    addScalar(s: number): this;
    sub(m: Matrix2): this;
    subScalar(s: number): this;
    multiply(m: Matrix2): this;
    scale(m: Matrix2): this;
    scaleScalar(v: number): this;
    rotate(rad: number): this;
    clone(): Matrix2;
    copy(m: Matrix2): this;
    equals(m: Matrix2): boolean;
}
