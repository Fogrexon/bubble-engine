export class Color {
  public r: number;

  public g: number;

  public b: number;

  public a: number;

  public constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  public set(r: number, g: number, b: number, a?: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a || this.a;
    return this;
  }

  public setFromHex(hex: number) {
    this.r = ((hex >> 16) & 255) / 255;
    this.g = ((hex >> 8) & 255) / 255;
    this.b = (hex & 255) / 255;
    return this;
  }

  public setFromHSL(h: number, s: number, l: number) {
    // hslToRgb
    if (s === 0) {
      this.r = this.g = this.b = l;
    } else {
      const hue2rgb = (p: number, q: number, _t: number) => {
        let t = _t;
        if (t < 0) {
          t += 1;
        }
        if (t > 1) {
          t -= 1;
        }
        if (t < 1 / 6) {
          return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
          return q;
        }
        if (t < 2 / 3) {
          return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      this.r = hue2rgb(p, q, h + 1 / 3);
      this.g = hue2rgb(p, q, h);
      this.b = hue2rgb(p, q, h - 1 / 3);
    }

    return this;
  }

  public toHSL() {
    // rgbToHsl
    const { r, g, b } = this;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h: number;
    let s: number;
    const l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
      default:
        h = (r - g) / d + 4;
        break;
      }
      h /= 6;
    }
    return { h, s, l };
  }

  public add(color: Color) {
    this.r += color.r;
    this.g += color.g;
    this.b += color.b;
    this.a += color.a;
    return this;
  }

  public addScalar(s: number) {
    this.r += s;
    this.g += s;
    this.b += s;
    this.a += s;
    return this;
  }

  public sub(color: Color) {
    this.r -= color.r;
    this.g -= color.g;
    this.b -= color.b;
    this.a -= color.a;
    return this;
  }

  public subScalar(s: number) {
    this.r -= s;
    this.g -= s;
    this.b -= s;
    this.a -= s;
    return this;
  }

  public multiply(color: Color) {
    this.r *= color.r;
    this.g *= color.g;
    this.b *= color.b;
    this.a *= color.a;
    return this;
  }

  public multiplyScalar(s: number) {
    this.r *= s;
    this.g *= s;
    this.b *= s;
    this.a *= s;
    return this;
  }

  public lerp(color: Color, t: number) {
    this.r += (color.r - this.r) * t;
    this.g += (color.g - this.g) * t;
    this.b += (color.b - this.b) * t;
    this.a += (color.a - this.a) * t;
    return this;
  }

  public lerpHSL(color: Color, t: number) {
    const hslA = this.toHSL();
    const hslB = color.toHSL();
    const h = hslA.h + (hslB.h - hslA.h) * t;
    const s = hslA.s + (hslB.s - hslA.s) * t;
    const l = hslA.l + (hslB.l - hslA.l) * t;
    this.setFromHSL(h, s, l);
    return this;
  }

  public clone() {
    return new Color(this.r, this.g, this.b, this.a);
  }

  public copy(color: Color) {
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    this.a = color.a;
    return this;
  }

  public equals(color: Color) {
    return this.r === color.r && this.g === color.g && this.b === color.b && this.a === color.a;
  }

  public toStyle() {
    return `rgba(${Math.floor(this.r * 255)}, ${Math.floor(this.g * 255)}, ${Math.floor(
      this.b * 255
    )}, ${this.a})`;
  }
}
