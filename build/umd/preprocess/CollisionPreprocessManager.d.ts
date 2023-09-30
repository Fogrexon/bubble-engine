import { CollisionLayerInfo } from './CollisionLayerInfo';
import { PreprocessManager } from './PreprocessManager';
export declare class CollisionPreprocessManager<LayerNames extends string[] = string[]> extends PreprocessManager {
    private readonly _layerNames;
    private readonly _layerTable;
    readonly collisionTable: [LayerNames[number], LayerNames[number]][];
    private readonly _tempHitPoint;
    constructor(layers: LayerNames, collisionPairs?: [LayerNames[number], LayerNames[number]][]);
    /**
     * レイヤーIDからレイヤーを取得
     * @param id
     */
    getLayer(id: LayerNames[number]): CollisionLayerInfo;
    beforeProcess(): void;
    afterProcess(): void;
    private testAndRegister;
}
