import { CollisionLayerInfo } from './CollisionLayerInfo';
export declare class CollisionManager<LayerNames extends string[] = [], CollisionPairs extends [LayerNames[number], LayerNames[number]][] = [LayerNames[number], LayerNames[number]][]> {
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
