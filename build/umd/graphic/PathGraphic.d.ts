import { PathBase } from './path';
import { GraphicStyle, LineStyle } from './util';
import { GraphicBase } from './GraphicBase';
import { CanvasLayerInfo } from '../preprocess';
export declare class PathGraphic extends GraphicBase {
    path: PathBase[];
    readonly style: LineStyle & GraphicStyle;
    private _tempVector;
    constructor(path: PathBase[], style: LineStyle & GraphicStyle);
    render(layer: CanvasLayerInfo): import("..").Rect;
}
