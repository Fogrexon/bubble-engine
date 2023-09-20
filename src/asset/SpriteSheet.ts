import { AssetBase } from './AssetBase';

export class SpriteSheet extends AssetBase<HTMLImageElement> {
  public readonly columns: number;

  public readonly rows: number;

  public get width(): number {
    return this.data.width;
  }

  public get height(): number {
    return this.data.height;
  }

  public get segmentWidth(): number {
    return this.width / this.columns;
  }

  public get segmentHeight(): number {
    return this.height / this.rows;
  }

  constructor(data: HTMLImageElement, columns: number, rows: number) {
    super(data);
    this.columns = columns;
    this.rows = rows;
  }
}
