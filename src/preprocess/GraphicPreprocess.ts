import { PreprocessBase } from './PreprocessBase';
import { GraphicComponent } from '../component';

/**
 * 描画系をつかさどるコンポーネント
 */
export class GraphicPreprocess extends PreprocessBase {
  /**
   * 描画順
   */
  public index: number = 0;

  public process(deltaTime: number): void {
    if (!this.entry.enabled) return;

    const comp = this.entry.getComponent(GraphicComponent);

    if (comp && comp.enabled) {
      this.draw(comp);
    }

    const childrenGraphic = this.entry.transform.children.map(
      (childTransform) => childTransform.entry.graphic
    );
    childrenGraphic.sort((a, b) => a.index - b.index);
    childrenGraphic.forEach((child) => {
      child.process(deltaTime);
    });
  }

  protected draw(comp: GraphicComponent): void {
    const { worldMatrix } = this.entry.transform;
    const ctx = comp.layer.context;
    ctx.save();
    ctx.transform(
      worldMatrix.m00,
      worldMatrix.m01,
      worldMatrix.m10,
      worldMatrix.m11,
      worldMatrix.m02,
      worldMatrix.m12
    );
    ctx.rotate(comp.rotation);

    comp.parts.forEach((part, index) => {
      const boundingBox = part.render(comp.layer);
      if (index === 0) comp.boundingRect.copy(boundingBox);
      else comp.boundingRect.merge(boundingBox);
    });
    ctx.restore();
  }
}
