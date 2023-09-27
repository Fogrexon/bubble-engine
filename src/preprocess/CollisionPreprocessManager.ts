import { CollisionLayerInfo } from './CollisionLayerInfo';
import { PreprocessManager } from './PreprocessManager';

export class CollisionPreprocessManager<LayerNames extends string[]> extends PreprocessManager {
  private readonly _layerNames: LayerNames;

  private readonly _layerTable: Record<LayerNames[number], CollisionLayerInfo> = {} as Record<
    LayerNames[number],
    CollisionLayerInfo
  >;

  constructor(layers: LayerNames) {
    super();
    this._layerNames = layers;
    layers.forEach((layerName: LayerNames[number]) => {
      this._layerTable[layerName] = new CollisionLayerInfo();
    });
  }

  public getLayer(id: LayerNames[number]): CollisionLayerInfo {
    return this._layerTable[id];
  }

  public beforeProcess(): void {
    Object.keys(this._layerTable).forEach((layerName: LayerNames[number]) => {
      this._layerTable[layerName].colliders = [];
    });
  }

  public afterProcess(): void {
    // 衝突判定
    // Object.keys(this._layerTable).forEach((layerName: LayerNames[number]) => {
    // const layer = this._layerTable[layerName];
    // });
  }
}
