export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export abstract class GraphicBase {
  public abstract render(ctx: CanvasRenderingContext2D): void;

  public abstract getBoundingBox(): Rect;
}
