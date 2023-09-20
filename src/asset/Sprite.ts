import { AssetBase } from './AssetBase';

export class Sprite extends AssetBase<HTMLImageElement> {
  public get width(): number {
    return this.data.width;
  }

  public get height(): number {
    return this.data.height;
  }
}
