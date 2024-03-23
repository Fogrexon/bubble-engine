import { GraphicLayerInfo } from './GraphicLayerInfo';
export declare class GraphicManager<LayerNames extends string[] = string[]> {
    private _layerNames;
    private _layerTable;
    private _screenshotCanvas;
    private _canvasWrapper;
    private _width;
    private _height;
    get width(): number;
    get height(): number;
    constructor(layers: LayerNames, wrapper: HTMLElement);
    private resetSize;
    /**
     * レイヤーの取得
     * @param id
     */
    getLayer(id: LayerNames[number]): GraphicLayerInfo;
    /**
     *
     */
    beforeProcess(): void;
    afterProcess(): void;
    getScreenshot(): HTMLCanvasElement;
}
