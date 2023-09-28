import { CanvasLayerInfo } from './CanvasLayerInfo';
import { PreprocessManager } from './PreprocessManager';
export declare class GraphicPreprocessManager<LayerNames extends string[] = string[]> extends PreprocessManager {
    private _layerNames;
    private _layerTable;
    private _canvasWrapper;
    private _width;
    private _height;
    get width(): number;
    get height(): number;
    constructor(layers: LayerNames, canvasWrapper: HTMLElement);
    getLayer(id: LayerNames[number]): CanvasLayerInfo;
    private resetSize;
    beforeProcess(): void;
    afterProcess(): void;
}
