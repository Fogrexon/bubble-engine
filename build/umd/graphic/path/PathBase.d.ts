import { Rect } from '../../util';
import { Vector2 } from '../../math';
import { CanvasLayerInfo } from '../../preprocess';
export declare abstract class PathBase {
    protected readonly _boundingBox: Rect;
    abstract render(layer: CanvasLayerInfo, prevPoint: Vector2): Rect;
}
