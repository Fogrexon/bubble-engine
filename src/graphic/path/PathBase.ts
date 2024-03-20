import { Rect } from '../../util';
import { Vector2 } from '../../math';
import { GraphicLayerInfo } from '../../core/preprocess';

export abstract class PathBase {
  protected readonly _boundingBox = new Rect();

  public abstract render(layer: GraphicLayerInfo, prevPoint: Vector2): Rect;
}
