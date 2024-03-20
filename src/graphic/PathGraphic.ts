import { PathBase } from './path';
import { GraphicStyle, LineStyle } from './util';
import { Vector2 } from '../math';
import { GraphicBase } from './GraphicBase';
import { GraphicLayerInfo } from '../core/preprocess';

export class PathGraphic extends GraphicBase {
  public path: PathBase[];

  public readonly style: LineStyle & GraphicStyle;

  private _tempVector: Vector2 = new Vector2();

  constructor(path: PathBase[], style: LineStyle & GraphicStyle) {
    super();
    this.path = path;
    this.style = style;
  }

  public render(layer: GraphicLayerInfo) {
    this._tempVector.set(0, 0);

    this.path.forEach((path, index) => {
      const boundingBox = path.render(layer, this._tempVector);
      if (index === 0) this._boundingBox.copy(boundingBox);
      else this._boundingBox.merge(boundingBox);
    });
    return this._boundingBox;
  }
}
