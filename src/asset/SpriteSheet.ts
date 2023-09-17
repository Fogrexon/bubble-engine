import { AssetBase } from './AssetBase';

export class SpriteSheet extends AssetBase<HTMLImageElement> {

  public readonly columns: number;

  public readonly rows: number;

  constructor(data: HTMLImageElement, columns: number, rows: number) {
    super(data);
    this.columns = columns;
    this.rows = rows;
  }
}