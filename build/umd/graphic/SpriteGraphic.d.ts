import { GraphicBase } from './GraphicBase';
import { Rect } from '../util';
import { SpriteAsset } from '../loader';
import { Vector2 } from '../math';
import { CanvasLayerInfo } from '../preprocess';
export declare class SpriteGraphic extends GraphicBase {
    readonly position: Vector2;
    readonly anchor: Vector2;
    readonly size: Vector2;
    alpha: number;
    sprite: SpriteAsset;
    constructor(sprite: SpriteAsset);
    render(layer: CanvasLayerInfo): Rect;
}
