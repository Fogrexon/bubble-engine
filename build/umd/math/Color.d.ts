export declare class Color {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(r?: number, g?: number, b?: number, a?: number);
    set(r: number, g: number, b: number, a?: number): this;
    setFromHex(hex: number): this;
    setFromHSL(h: number, s: number, l: number): this;
    toHSL(): {
        h: number;
        s: number;
        l: number;
    };
    add(color: Color): this;
    addScalar(s: number): this;
    sub(color: Color): this;
    subScalar(s: number): this;
    multiply(color: Color): this;
    multiplyScalar(s: number): this;
    lerp(color: Color, t: number): this;
    lerpHSL(color: Color, t: number): this;
    clone(): Color;
    copy(color: Color): this;
    equals(color: Color): boolean;
    toStyleText(): string;
}
