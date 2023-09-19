import {CanvasLayerInfo} from '../core';
import {Rect} from '../util';

export abstract class GraphicBases {
  public abstract render(layer: CanvasLayerInfo): void;

  public abstract getBoundingBox(): Rect;
}
