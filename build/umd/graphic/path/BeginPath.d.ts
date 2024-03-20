import { PathBase } from './PathBase';
import { Vector2 } from '../../math';
import { GraphicLayerInfo } from '../../core/preprocess';
export declare class BeginPath extends PathBase {
    readonly position: Vector2;
    constructor(x: number, y: number);
    render(layer: GraphicLayerInfo, prevPos: Vector2): import("../..").Rect;
}
