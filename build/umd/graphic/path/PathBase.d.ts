import { Rect } from '../../util';
import { CanvasLayerInfo } from '../../core';
import { Vector2 } from '../../math';
export declare abstract class PathBase {
    protected readonly _boundingBox: Rect;
    abstract render(layer: CanvasLayerInfo, prevPoint: Vector2): Rect;
}
