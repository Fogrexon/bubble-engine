import { ComponentBase } from './ComponentBase';
import { GraphicBase } from '../graphic';
import { CanvasLayerInfo } from '../core';
import { Rect } from '../util';

export class GraphicComponent extends ComponentBase {
  public readonly parts: GraphicBase[];

  private readonly _layer: CanvasLayerInfo;

  public readonly boundingRect: Rect = new Rect(0, 0, 0, 0);

  constructor(layer: CanvasLayerInfo, parts: GraphicBase[]) {
    super();
    this._layer = layer;
    this.parts = parts;
  }

  protected onDestroy(): void {}

  protected onDisable(): void {}

  protected onEnable(): void {}

  protected onInitialize(): void {}

  protected onStart(): void {}

  protected onUpdate(): void {
    const { worldMatrix } = this.entry.transform;
    const ctx = this._layer.context;
    ctx.save();
    ctx.transform(
      worldMatrix.m00,
      worldMatrix.m01,
      worldMatrix.m10,
      worldMatrix.m11,
      worldMatrix.m02,
      worldMatrix.m12
    );

    this.parts.forEach((part, index) => {
      const boundingBox = part.render(this._layer);
      if (index === 0) this.boundingRect.copy(boundingBox);
      else this.boundingRect.merge(boundingBox);
    });
    ctx.restore();
  }
}
