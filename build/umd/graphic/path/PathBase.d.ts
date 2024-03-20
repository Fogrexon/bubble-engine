import { Rect } from '../../util';
import { Vector2 } from '../../math';
import { GraphicLayerInfo } from '../../core/preprocess';
export declare abstract class PathBase {
    protected readonly _boundingBox: Rect;
    abstract render(layer: GraphicLayerInfo, prevPoint: Vector2): Rect;
}
