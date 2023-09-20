import {PathBase} from './PathBase';
import {Vector2} from '../../math';
import {CanvasLayerInfo} from '../../core';

export class LinePath extends PathBase {
  public readonly position: Vector2 = new Vector2();

  constructor(x: number, y: number) {
    super();
    this.position.set(x, y);
  }

  public render(layer: CanvasLayerInfo, prevPos: Vector2) {
    layer.context.lineTo(this.position.x, this.position.y);
    prevPos.set(this.position.x, this.position.y);
    
    this._boundingBox.set(this.position.x, this.position.y, 0, 0);
    return this._boundingBox;
  }
}