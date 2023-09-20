import { GraphicBase } from './GraphicBase';
import { CanvasLayerInfo } from '../core';
import { Rect } from '../util';
import { Vector2 } from '../math';
import { GraphicStyle, LineStyle, TextStyle } from './util';
export declare class TextGraphic extends GraphicBase {
    readonly position: Vector2;
    text: string;
    font: string;
    style: LineStyle & TextStyle & GraphicStyle;
    constructor(text: string, font: string, style: LineStyle & TextStyle & GraphicStyle);
    render(layer: CanvasLayerInfo): Rect;
}
