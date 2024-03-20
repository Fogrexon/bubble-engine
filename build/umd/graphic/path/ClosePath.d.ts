import { PathBase } from './PathBase';
import { Vector2 } from '../../math';
import { GraphicLayerInfo } from '../../core/preprocess';
export declare class ClosePath extends PathBase {
    render(layer: GraphicLayerInfo, prevPos: Vector2): import("../..").Rect;
}
