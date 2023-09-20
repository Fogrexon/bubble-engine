import {Rect} from '../../util';
import {CanvasLayerInfo} from '../../core';
import {Vector2} from '../../math';

export abstract class PathBase {
  protected readonly _boundingBox = new Rect();

  public abstract render(layer: CanvasLayerInfo, prevPoint: Vector2): Rect;
}