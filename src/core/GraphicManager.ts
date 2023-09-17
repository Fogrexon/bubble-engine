import { CanvasLayerInfo } from './CanvasLayerInfo';

export class GraphicManager<T extends Record<string, CanvasLayerInfo>> {
  private _layerTable: T;

  private _width: number = 0;

  private _height: number = 0;

  public get width() {
    return this._width;
  }

  public set width(value: number) {
    this._width = value;
    Object.values(this._layerTable).forEach((layer) => {
      layer.canvas.width = value;
    });
  }

  public get height() {
    return this._height;
  }

  public set height(value: number) {
    this._height = value;
    Object.values(this._layerTable).forEach((layer) => {
      layer.canvas.height = value;
    });
  }

  constructor(layerTable: T, width: number, height: number) {
    this._layerTable = layerTable;
    this.width = width;
    this.height = height;
  }

  public getContext(id: keyof T): CanvasRenderingContext2D {
    return this._layerTable[id].context;
  }
}