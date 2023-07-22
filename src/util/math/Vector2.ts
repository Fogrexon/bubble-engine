export class Vector2 {
  public x: number = 0;

  public y: number = 0;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  public set(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }

  public setVector2(vector2: Vector2) {
    this.x = vector2.x;
    this.y = vector2.y;
    return this;
  }

  public setScalar(scalar: number) {
    this.x = scalar;
    this.y = scalar;
    return this;
  }

  public copy(vector2: Vector2) {
    this.x = vector2.x;
    this.y = vector2.y;
    return this;
  }

  public clone() {
    return new Vector2(this.x, this.y);
  }

  public add(x: number, y: number) {
    this.x += x;
    this.y += y;
    return this;
  }

  public addVector2(vector2: Vector2) {
    this.x += vector2.x;
    this.y += vector2.y;
    return this;
  }

  public addScalar(scalar: number) {
    this.x += scalar;
    this.y += scalar;
    return this;
  }

  public sub(x: number, y: number) {
    this.x -= x;
    this.y -= y;
    return this;
  }

  public subVector2(vector2: Vector2) {
    this.x -= vector2.x;
    this.y -= vector2.y;
    return this;
  }

  public subScalar(scalar: number) {
    this.x -= scalar;
    this.y -= scalar;
    return this;
  }

  public mul(x: number, y: number) {
    this.x *= x;
    this.y *= y;
    return this;
  }

  public mulVector2(vector2: Vector2) {
    this.x *= vector2.x;
    this.y *= vector2.y;
    return this;
  }

  public mulScalar(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  public div(x: number, y: number) {
    this.x /= x;
    this.y /= y;
    return this;
  }

  public divVector2(vector2: Vector2) {
    this.x /= vector2.x;
    this.y /= vector2.y;
    return this;
  }

  public divScalar(scalar: number) {
    this.x /= scalar;
    this.y /= scalar;
    return this;
  }

  public dot(x: number, y: number) {
    return this.x * x + this.y * y;
  }

  public dotVector2(vector2: Vector2) {
    return this.x * vector2.x + this.y * vector2.y;
  }

  public cross(x: number, y: number) {
    return this.x * y - this.y * x;
  }

  public crossVector2(vector2: Vector2) {
    return this.x * vector2.y - this.y * vector2.x;
  }

  public length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public length2() {
    return this.x * this.x + this.y * this.y;
  }

  public normalize() {
    const length = this.length();
    this.x /= length;
    this.y /= length;
    return this;
  }
}
