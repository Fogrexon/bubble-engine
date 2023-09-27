import { GraphicBase } from '../graphic';
import { Rect } from '../util';
import { ComponentBase } from './ComponentBase';
import { CanvasLayerInfo } from '../preprocess/CanvasLayerInfo';

/**
 * 描画系をつかさどるコンポーネント
 */
export class GraphicComponent extends ComponentBase {
  /**
   * グラフィックコンポーネントの回転
   */
  public rotation: number = 0;

  /**
   * グラフィックコンポーネントのバウンディングボックス
   */
  public readonly boundingRect: Rect = new Rect(0, 0, 0, 0);

  public readonly parts: GraphicBase[];

  public readonly layer: CanvasLayerInfo;

  constructor(layer: CanvasLayerInfo, parts: GraphicBase[]) {
    super();
    this.layer = layer;
    this.parts = parts;
  }

  protected onDestroy(): void {}

  protected onDisable(): void {}

  protected onEnable(): void {}

  protected onInitialize(): void {}

  protected onStart(): void {}

  protected onUpdate(): void {}
}
