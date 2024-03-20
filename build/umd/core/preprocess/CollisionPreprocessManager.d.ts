import { CollisionLayerInfo } from './CollisionLayerInfo';
import { PreprocessManager } from './PreprocessManager';
export declare class CollisionPreprocessManager<LayerNames extends string[] = [], CollisionPairs extends [LayerNames[number], LayerNames[number]][] = [LayerNames[number], LayerNames[number]][]> extends PreprocessManager {
    private readonly _layerNames;
    private readonly _layerTable;
    readonly collisionTable: [LayerNames[number], LayerNames[number]][];
    private readonly _tempHitPoint;
    constructor(layers: LayerNames, collisionPairs?: CollisionPairs);
    /**
     * レイヤーIDからレイヤーを取得
     * @param id
     */
    getLayer(id: LayerNames[number]): CollisionLayerInfo;
    beforeProcess(): void;
    afterProcess(): void;
    private testAndRegister;
}
