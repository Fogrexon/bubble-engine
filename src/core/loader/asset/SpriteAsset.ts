import { AssetBase } from './AssetBase';

/**
 * 画像を表すクラス
 */
export class SpriteAsset extends AssetBase<HTMLImageElement> {
  public get width(): number {
    return this.data?.width || 0;
  }

  public get height(): number {
    return this.data?.height || 0;
  }

  constructor(path: string) {
    super(path, 'image');
  }
}
