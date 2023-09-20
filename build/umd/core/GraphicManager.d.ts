import { CanvasLayerInfo } from './CanvasLayerInfo';
export declare class GraphicManager<LayerNames extends string[]> {
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
}
