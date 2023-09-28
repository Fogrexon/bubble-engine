import { GraphicBase } from './GraphicBase';
import { Rect } from '../util';
import { SpriteSheet } from '../asset';
import { Vector2 } from '../math';
import { CanvasLayerInfo } from '../preprocess';
export declare class SpriteSheetGraphic extends GraphicBase {
    readonly position: Vector2;
    readonly size: Vector2;
    sprite: SpriteSheet;
    spriteIndex: number;
    constructor(sprite: SpriteSheet);
    render(layer: CanvasLayerInfo): Rect;
}
