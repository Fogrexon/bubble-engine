export class Rect {
  public x: number;

  public y: number;

  public width: number;

  public height: number;

  constructor(x: number = 0, y: number = 0, width: number = 0, height: number = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public set(x: number, y: number, width: number, height: number): void {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public copy(rect: Rect): void {
    this.x = rect.x;
    this.y = rect.y;
    this.width = rect.width;
    this.height = rect.height;
  }

  public clone(): Rect {
    return new Rect(this.x, this.y, this.width, this.height);
  }

  public contains(x: number, y: number): boolean {
    return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
  }

  public containsRect(rect: Rect): boolean {
    return this.contains(rect.x, rect.y) && this.contains(rect.x + rect.width, rect.y + rect.height);
  }

  public intersects(rect: Rect): boolean {
    return this.x < rect.x + rect.width && this.x + this.width > rect.x && this.y < rect.y + rect.height && this.y + this.height > rect.y;
  }

  public merge(rect: Rect): Rect {
    const left = Math.min(this.x, rect.x);
    const top = Math.min(this.y, rect.y);
    const right = Math.max(this.x + this.width, rect.x + rect.width);
    const bottom = Math.max(this.y + this.height, rect.y + rect.height);
    return new Rect(left, top, right - left, bottom - top);
  }
}