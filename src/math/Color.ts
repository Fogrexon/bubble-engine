import {ColorBase, MathBaseRegister} from '../pluggable/math';

export class Color {
  public readonly instance: ColorBase;

  constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 1) {
    this.instance = MathBaseRegister.get('color');
    this.instance.set(r, g, b, a);
  }

  public get r(): number {
    return this.instance.r;
  }

  public set r(value: number) {
    this.instance.r = value;
  }

  public get g(): number {
    return this.instance.g;
  }

  public set g(value: number) {
    this.instance.g = value;
  }

  public get b(): number {
    return this.instance.b;
  }

  public set b(value: number) {
    this.instance.b = value;
  }

  public get a(): number {
    return this.instance.a;
  }

  public set a(value: number) {
    this.instance.a = value;
  }

  public set(r: number, g: number, b: number, a: number): this {
    this.instance.set(r, g, b, a);
    return this;
  }

  public add(v: Color): this {
    this.instance.add(v.instance);
    return this;
  }

  public sub(v: Color): this {
    this.instance.sub(v.instance);
    return this;
  }

  public mul(v: Color): this {
    this.instance.mul(v.instance);
    return this;
  }

  public scale(s: number): this {
    this.instance.scale(s);
    return this;
  }

  public lerp(v: Color, t: number): this {
    this.instance.lerp(v.instance, t);
    return this;
  }

  public equals(v: Color): boolean {
    return this.instance.equals(v.instance);
  }

  public clone(): this {
    return new (<any>this).constructor().copy(this);
  }

  public copy(v: Color): this {
    this.instance.copy(v.instance);
    return this;
  }
}