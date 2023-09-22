import { ManagerBase } from './ManagerBase';
import { CollisionLayerInfo } from './CollisionLayerInfo';

export class CollisionManager<LayerNames extends string[]> extends ManagerBase {
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

  public beforeUpdate(): void {
    Object.keys(this._layerTable).forEach((layerName: LayerNames[number]) => {
      this._layerTable[layerName].colliders = [];
    });
  }

  public afterUpdate(): void {
    Object.keys(this._layerTable).forEach((layerName: LayerNames[number]) => {
      const layer = this._layerTable[layerName];
      layer.colliders.forEach((collider) => {
        collider.update();
      });
    });
  }
}
