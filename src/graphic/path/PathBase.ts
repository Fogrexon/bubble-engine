import { Rect } from '../../util';
import { Vector2 } from '../../math';
import { CanvasLayerInfo } from '../../preprocess';

export abstract class PathBase {
  protected readonly _boundingBox = new Rect();

  public abstract render(layer: CanvasLayerInfo, prevPoint: Vector2): Rect;
}
