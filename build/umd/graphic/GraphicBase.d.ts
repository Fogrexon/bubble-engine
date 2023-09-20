import { CanvasLayerInfo } from '../core';
import { Rect } from '../util';
export declare abstract class GraphicBase {
    protected _boundingBox: Rect;
    abstract render(layer: CanvasLayerInfo): Rect;
}
