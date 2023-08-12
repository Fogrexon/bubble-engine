export abstract class ColorBase {
  abstract get r(): number;

  abstract get g(): number;

  abstract get b(): number;

  abstract get a(): number;

  abstract set r(value: number);

  abstract set g(value: number);

  abstract set b(value: number);

  abstract set a(value: number);

  abstract set(r: number, g: number, b: number, a: number): this;

  abstract setHSL(h: number, s: number, l: number): this;

  abstract getHSL(): { h: number, s: number, l: number };

  abstract add(color: ColorBase): this;

  abstract sub(color: ColorBase): this;

  abstract mul(color: ColorBase): this;

  abstract scale(s: number): this;

  abstract lerp(color: ColorBase, t: number): this;

  abstract equals(color: ColorBase): boolean;

  abstract clone(): this;

  abstract copy(color: ColorBase): this;
}