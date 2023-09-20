import { PathBase } from './PathBase';
import { CanvasLayerInfo } from '../../core';
import { Vector2 } from '../../math';
export declare class ClosePath extends PathBase {
    render(layer: CanvasLayerInfo, prevPos: Vector2): import("../..").Rect;
}
