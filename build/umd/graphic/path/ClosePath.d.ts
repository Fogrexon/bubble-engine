import { PathBase } from './PathBase';
import { Vector2 } from '../../math';
import { CanvasLayerInfo } from '../../preprocess';
export declare class ClosePath extends PathBase {
    render(layer: CanvasLayerInfo, prevPos: Vector2): import("../..").Rect;
}
