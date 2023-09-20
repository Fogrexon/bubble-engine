export declare class Rect {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    set(x: number, y: number, width: number, height: number): void;
    copy(rect: Rect): void;
    clone(): Rect;
    contains(x: number, y: number): boolean;
    containsRect(rect: Rect): boolean;
    intersects(rect: Rect): boolean;
    merge(rect: Rect): Rect;
}
