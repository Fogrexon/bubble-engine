import { AssetBase } from './AssetBase';

export class SplitSprite extends AssetBase<HTMLImageElement> {
  public readonly left: number;

  public readonly top: number;

  public readonly right: number;

  public readonly bottom: number;

  constructor(data: HTMLImageElement, left: number, top: number, right: number, bottom: number) {
    super(data);
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }
}
