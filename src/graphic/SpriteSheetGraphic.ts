import { GraphicBase } from './GraphicBase';
import { Rect } from '../util';
import { SpriteSheet } from '../asset';
import { Vector2 } from '../math';
import { CanvasLayerInfo } from '../preprocess';

export class SpriteSheetGraphic extends GraphicBase {
  public readonly position = new Vector2();

  public readonly size = new Vector2();

  public sprite: SpriteSheet;

  public spriteIndex: number;

  constructor(sprite: SpriteSheet) {
    super();
    this.sprite = sprite;
    this.size.set(sprite.segmentWidth, sprite.segmentHeight);
    this.spriteIndex = 0;
  }

  public render(layer: CanvasLayerInfo): Rect {
    layer.context.drawImage(
      this.sprite.data,
      (this.spriteIndex % this.sprite.columns) * this.sprite.segmentWidth,
      Math.floor(this.spriteIndex / this.sprite.columns) * this.sprite.segmentHeight,
      this.sprite.segmentWidth,
      this.sprite.segmentHeight,
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
    this._boundingBox.set(this.position.x, this.position.y, this.size.x, this.size.y);
    return this._boundingBox;
  }
}
