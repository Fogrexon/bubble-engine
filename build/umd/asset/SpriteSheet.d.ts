import { AssetBase } from './AssetBase';
export declare class SpriteSheet extends AssetBase<HTMLImageElement> {
    readonly columns: number;
    readonly rows: number;
    constructor(data: HTMLImageElement, columns: number, rows: number);
}
