import { GraphicBase } from './GraphicBase';
import { Rect } from '../util';
import { SpriteSheetAsset } from '../core/loader';
import { Vector2 } from '../math';
import { GraphicLayerInfo } from '../core/preprocess';
export declare class SpriteSheetGraphic extends GraphicBase {
    readonly position: Vector2;
    readonly size: Vector2;
    sprite: SpriteSheetAsset;
    spriteIndex: number;
    constructor(sprite: SpriteSheetAsset);
    render(layer: GraphicLayerInfo): Rect;
}
