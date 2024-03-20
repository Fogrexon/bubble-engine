import { AssetBase } from './AssetBase';
/**
 * 画像の一部を切り出した画像を表すクラス
 */
export declare class SubSpriteAsset extends AssetBase<HTMLImageElement> {
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    constructor(path: string, left: number, top: number, right: number, bottom: number);
}
