import { Rect } from '../util';
import { CanvasLayerInfo } from '../preprocess';

export abstract class GraphicBase {
  protected _boundingBox: Rect = new Rect();

  public abstract render(layer: CanvasLayerInfo): Rect;
}
