import { GraphicBase } from './GraphicBase';
import { Rect } from '../util';
import { SpriteAsset } from '../core/loader';
import { Vector2 } from '../math';
import { GraphicLayerInfo } from '../core/preprocess';

export class SpriteGraphic extends GraphicBase {
  public readonly position = new Vector2();

  public readonly anchor = new Vector2(0.5, 0.5);

  public readonly size = new Vector2();

  public alpha = 1;

  public sprite: SpriteAsset;

  constructor(sprite: SpriteAsset) {
    super();
    this.sprite = sprite;
    this.size.set(sprite.width, sprite.height);
  }

  public render(layer: GraphicLayerInfo): Rect {
    const left = this.position.x - this.anchor.x * this.size.x;
    const top = this.position.y - this.anchor.y * this.size.y;

    if (this.sprite.data) {
      layer.context.globalAlpha = this.alpha;
      layer.context.drawImage(this.sprite.data, left, top, this.size.x, this.size.y);
      layer.context.globalAlpha = 1;
    }

    this._boundingBox.set(this.position.x, this.position.y, this.size.x, this.size.y);
    return this._boundingBox;
  }
}
