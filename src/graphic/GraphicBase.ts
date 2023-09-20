import {CanvasLayerInfo} from '../core';
import {Rect} from '../util';

export abstract class GraphicBase {
  protected _boundingBox: Rect = new Rect();

  public abstract render(layer: CanvasLayerInfo): Rect;
}
