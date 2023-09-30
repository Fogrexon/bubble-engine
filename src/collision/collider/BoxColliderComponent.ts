import { Vector2 } from '../../math';
import { ColliderComponent } from '../../component';
import { CollisionLayerInfo } from '../../preprocess';

export type SimpleAreaStruct = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

/**
 * 長方形形状のコライダー
 */
export class BoxColliderComponent extends ColliderComponent {
  /**
   * 長方形のサイズ
   * x = width
   * y = height
   */
  public readonly size = new Vector2(1, 1);

  /**
   * 長方形のオフセット
   */
  public readonly offset = new Vector2();

  public constructor(
    layer: CollisionLayerInfo,
    offsetX: number,
    offsetY: number,
    width: number,
    height: number
  ) {
    super(layer);
    this.offset.set(offsetX, offsetY);
    this.size.set(width, height);
  }

  public getWorldBox(): SimpleAreaStruct {
    if (!this.entry) throw new Error('BoxCollider: transform is not assigned.');
    const { x, y } = this.offset;
    const { x: width, y: height } = this.size;

    const { x: worldX, y: worldY } = this.entry.transform.worldPosition;
    const { x: worldScaleX, y: worldScaleY } = this.entry.transform.worldScale;
    return {
      left: worldX + worldScaleX * x - worldScaleX * width * 0.5,
      top: worldY + worldScaleY * y - worldScaleY * height * 0.5,
      right: worldX + worldScaleX * x + worldScaleX * width * 0.5,
      bottom: worldY + worldScaleY * y + worldScaleY * height * 0.5,
    };
  }
}
