export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare abstract class GraphicBase {
    abstract render(ctx: CanvasRenderingContext2D): void;
    abstract getBoundingBox(): Rect;
}
