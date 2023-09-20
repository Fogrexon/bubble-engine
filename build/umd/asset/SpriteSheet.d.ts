import { AssetBase } from './AssetBase';
export declare class SpriteSheet extends AssetBase<HTMLImageElement> {
    readonly columns: number;
    readonly rows: number;
    get width(): number;
    get height(): number;
    get segmentWidth(): number;
    get segmentHeight(): number;
    constructor(data: HTMLImageElement, columns: number, rows: number);
}
