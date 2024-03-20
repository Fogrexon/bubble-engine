import { PathBase } from './path';
import { GraphicStyle, LineStyle } from './util';
import { GraphicBase } from './GraphicBase';
import { GraphicLayerInfo } from '../core/preprocess';
export declare class PathGraphic extends GraphicBase {
    path: PathBase[];
    readonly style: LineStyle & GraphicStyle;
    private _tempVector;
    constructor(path: PathBase[], style: LineStyle & GraphicStyle);
    render(layer: GraphicLayerInfo): import("..").Rect;
}
