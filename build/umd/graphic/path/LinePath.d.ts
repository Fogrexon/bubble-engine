import { PathBase } from './PathBase';
import { Vector2 } from '../../math';
import { CanvasLayerInfo } from '../../core';
export declare class LinePath extends PathBase {
    readonly position: Vector2;
    constructor(x: number, y: number);
    render(layer: CanvasLayerInfo, prevPos: Vector2): import("../..").Rect;
}
