import { CanvasLayerInfo } from './CanvasLayerInfo';
export declare class GraphicManager<T extends Record<string, CanvasLayerInfo>> {
    private _layerTable;
    private _width;
    private _height;
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    constructor(layerTable: T, width: number, height: number);
    getContext(id: keyof T): CanvasRenderingContext2D;
}
