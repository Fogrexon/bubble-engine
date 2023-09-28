import { Rect } from '../util';
import { CanvasLayerInfo } from '../preprocess';
export declare abstract class GraphicBase {
    protected _boundingBox: Rect;
    abstract render(layer: CanvasLayerInfo): Rect;
}
