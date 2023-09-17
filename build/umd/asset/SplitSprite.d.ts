import { AssetBase } from './AssetBase';
export declare class SplitSprite extends AssetBase<HTMLImageElement> {
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    constructor(data: HTMLImageElement, left: number, top: number, right: number, bottom: number);
}
