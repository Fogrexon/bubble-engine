import { ComponentBase } from './ComponentBase';
import { GraphicBases } from '../graphic';
import {CanvasLayerInfo} from '../core';
import {Rect} from '../util';

export class GraphicComponent extends ComponentBase {
  public readonly parts: GraphicBases[];

  private _layer: CanvasLayerInfo;

  public readonly boundingRect: Rect = new Rect(0, 0, 0, 0);

  constructor(layer: CanvasLayerInfo, parts: GraphicBases[]) {
    super();
    this._layer = layer;
    this.parts = parts;
  }

  protected onDestroy(): void {
  }

  protected onDisable(): void {
  }

  protected onEnable(): void {
  }

  protected onInitialize(): void {
  }

  protected onStart(): void {
  }

  protected onUpdate(): void {
    const {worldMatrix} = this.entry.transform;
    const ctx = this._layer.context;
    ctx.save();
    ctx.transform(
      worldMatrix.m00,
      worldMatrix.m01,
      worldMatrix.m10,
      worldMatrix.m11,
      worldMatrix.m02,
      worldMatrix.m12,
    );

    this.parts.forEach((part, index) => {
      part.render(this._layer);
      if (index === 0) {
        this.boundingRect.copy(part.getBoundingBox());
      } else this.boundingRect.merge(part.getBoundingBox());
    });
    ctx.restore();
  }
}