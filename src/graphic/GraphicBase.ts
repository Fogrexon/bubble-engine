import { Rect } from '../util';
import { GraphicLayerInfo } from '../core/preprocess';

export abstract class GraphicBase {
  protected _boundingBox: Rect = new Rect();

  public abstract render(layer: GraphicLayerInfo): Rect;
}
