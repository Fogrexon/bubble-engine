import { CollisionLayerInfo } from './CollisionLayerInfo';
import { PreprocessManager } from './PreprocessManager';
import { Vector2 } from '../../math';
import { boxBoxHitTest, BoxColliderComponent } from '../../collision';
import { ColliderComponent } from '../../component';

export class CollisionPreprocessManager<
  LayerNames extends string[] = [],
  CollisionPairs extends [LayerNames[number], LayerNames[number]][] = [LayerNames[number], LayerNames[number]][]
> extends PreprocessManager {
  private readonly _layerNames: LayerNames;

  private readonly _layerTable: Record<LayerNames[number], CollisionLayerInfo> = {} as Record<
    LayerNames[number],
    CollisionLayerInfo
  >;

  public readonly collisionTable: [LayerNames[number], LayerNames[number]][];

  private readonly _tempHitPoint: Vector2 = new Vector2();

  constructor(layers: LayerNames, collisionPairs?: CollisionPairs) {
    super();
    this._layerNames = layers;
    layers.forEach((layerName: LayerNames[number]) => {
      this._layerTable[layerName] = new CollisionLayerInfo();
    });
    if (collisionPairs) {
      this.collisionTable = collisionPairs;
    } else {
      this.collisionTable = [];
      layers.forEach((layerName: LayerNames[number], index: number) => {
        for (let i = 0; i < index + 1; i += 1) {
          this.collisionTable.push([layerName, layers[i]]);
        }
      });
    }
  }

  /**
   * レイヤーIDからレイヤーを取得
   * @param id
   */
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
    this.collisionTable.forEach(([key1, key2]) => {
      const layer1 = this._layerTable[key1];
      const layer2 = this._layerTable[key2];

      if (key1 === key2) {
        layer1.colliders.forEach((collider1, index) => {
          // 自分自身と、すでに判定済みの物体は当たり判定をしない
          for (let i = 0; i < index; i += 1) {
            const collider2 = layer1.colliders[i];

            this.testAndRegister(collider1, collider2);
          }
        });
        return;
      }
      layer1.colliders.forEach((collider1) => {
        layer2.colliders.forEach((collider2) => {
          this.testAndRegister(collider1, collider2);
        });
      });
    });

    // 衝突情報を整理してイベントを発行
    this._layerNames.forEach((layerName: LayerNames[number]) => {
      this._layerTable[layerName].colliders.forEach((collider) => {
        collider.processCollision();
      });
    });
  }

  private testAndRegister(collider1: ColliderComponent, collider2: ColliderComponent) {
    // 現状衝突判定はBox同士のみなので、決め打ちで判定を行う
    if (!(collider1 instanceof BoxColliderComponent && collider2 instanceof BoxColliderComponent)) {
      throw new Error('CollisionPreprocessManager: BoxCollider is only allowed.');
    }

    if (
      boxBoxHitTest(
        collider1 as BoxColliderComponent,
        collider2 as BoxColliderComponent,
        this._tempHitPoint
      )
    ) {
      collider1.registerCollision({
        collider: collider2,
        hitPoint: new Vector2().copy(this._tempHitPoint),
      });
      collider2.registerCollision({
        collider: collider1,
        hitPoint: new Vector2().copy(this._tempHitPoint),
      });
    }
  }
}
