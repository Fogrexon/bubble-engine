import { PathBase } from './PathBase';
import { Vector2 } from '../../math';
import { GraphicLayerInfo } from '../../core/preprocess';

export class ClosePath extends PathBase {
  public render(layer: GraphicLayerInfo, prevPos: Vector2) {
    layer.context.closePath();

    this._boundingBox.set(prevPos.x, prevPos.y, 0, 0);
    return this._boundingBox;
  }
}
