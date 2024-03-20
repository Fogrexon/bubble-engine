import { GraphicBase } from './GraphicBase';
import { Rect } from '../util';
import { SpriteAsset } from '../core/loader';
import { Vector2 } from '../math';
import { GraphicLayerInfo } from '../core/preprocess';
export declare class SpriteGraphic extends GraphicBase {
    readonly position: Vector2;
    readonly anchor: Vector2;
    readonly size: Vector2;
    alpha: number;
    sprite: SpriteAsset;
    constructor(sprite: SpriteAsset);
    render(layer: GraphicLayerInfo): Rect;
}
