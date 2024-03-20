import { AssetBase } from './AssetBase';
/**
 * スプライトシートの画像を表すクラス
 */
export declare class SpriteSheetAsset extends AssetBase<HTMLImageElement> {
    readonly columns: number;
    readonly rows: number;
    get width(): number;
    get height(): number;
    /**
     * スプライトシートの各画像の幅
     */
    get segmentWidth(): number;
    /**
     * スプライトシートの各画像の高さ
     */
    get segmentHeight(): number;
    constructor(path: string, columns: number, rows: number);
}
