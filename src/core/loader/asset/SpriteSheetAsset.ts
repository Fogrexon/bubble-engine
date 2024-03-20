import { AssetBase } from './AssetBase';

/**
 * スプライトシートの画像を表すクラス
 */
export class SpriteSheetAsset extends AssetBase<HTMLImageElement> {
  public readonly columns: number;

  public readonly rows: number;

  public get width(): number {
    return this.data?.width || 0;
  }

  public get height(): number {
    return this.data?.height || 0;
  }

  /**
   * スプライトシートの各画像の幅
   */
  public get segmentWidth(): number {
    return this.width / this.columns;
  }

  /**
   * スプライトシートの各画像の高さ
   */
  public get segmentHeight(): number {
    return this.height / this.rows;
  }

  constructor(path: string, columns: number, rows: number) {
    super(path, 'image');
    this.columns = columns;
    this.rows = rows;
  }
}
