import { Rect } from '../util';
import { GraphicLayerInfo } from '../core/preprocess';
export declare abstract class GraphicBase {
    protected _boundingBox: Rect;
    abstract render(layer: GraphicLayerInfo): Rect;
}
