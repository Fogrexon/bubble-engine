import { CollisionLayerInfo } from './CollisionLayerInfo';
import { PreprocessManager } from './PreprocessManager';
import { UndirectedTable } from '../util/Table';
export declare class CollisionPreprocessManager<LayerNames extends string[] = string[]> extends PreprocessManager {
    private readonly _layerNames;
    private readonly _layerTable;
    readonly collisionTable: UndirectedTable<LayerNames, boolean>;
    constructor(layers: LayerNames);
    /**
     * レイヤーIDからレイヤーを取得
     * @param id
     */
    getLayer(id: LayerNames[number]): CollisionLayerInfo;
    beforeProcess(): void;
    afterProcess(): void;
}
