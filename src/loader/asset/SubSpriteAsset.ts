import { AssetBase } from './AssetBase';

/**
 * 画像の一部を切り出した画像を表すクラス
 */
export class SubSpriteAsset extends AssetBase<HTMLImageElement> {
  public readonly left: number;

  public readonly top: number;

  public readonly right: number;

  public readonly bottom: number;

  constructor(path: string, left: number, top: number, right: number, bottom: number) {
    super(path, 'image');
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }
}
