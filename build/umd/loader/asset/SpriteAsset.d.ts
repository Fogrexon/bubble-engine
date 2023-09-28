import { AssetBase } from './AssetBase';
/**
 * 画像を表すクラス
 */
export declare class SpriteAsset extends AssetBase<HTMLImageElement> {
    get width(): number;
    get height(): number;
    constructor(path: string);
}
