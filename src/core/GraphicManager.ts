import { CanvasLayerInfo } from './CanvasLayerInfo';
import { ManagerBase } from './ManagerBase';

export class GraphicManager<LayerNames extends string[]> extends ManagerBase {
  private _layerNames: LayerNames;

  private _layerTable: Record<LayerNames[number], CanvasLayerInfo>;

  private _canvasWrapper: HTMLElement;

  private _width: number = 0;

  private _height: number = 0;

  public get width() {
    return this._width;
  }

  public get height() {
    return this._height;
  }

  constructor(layers: LayerNames, canvasWrapper: HTMLElement) {
    super();
    this._layerNames = layers;
    this._canvasWrapper = canvasWrapper;

    this._layerTable = {} as Record<LayerNames[number], CanvasLayerInfo>;

    layers.forEach((layerName: LayerNames[number]) => {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvasWrapper.appendChild(canvas);
      this._layerTable[layerName] = {
        canvas,
        context: canvas.getContext('2d') as CanvasRenderingContext2D,
      };
    });

    this.resetSize();

    window.addEventListener('resize', this.resetSize.bind(this));
  }

  public getLayer(id: LayerNames[number]): CanvasLayerInfo {
    return this._layerTable[id];
  }

  private resetSize() {
    const rect = this._canvasWrapper.getBoundingClientRect();
    this._width = rect.width;
    this._height = rect.height;
    this._layerNames.forEach((layerName: LayerNames[number]) => {
      const layer = this._layerTable[layerName];
      layer.canvas.width = this._width;
      layer.canvas.height = this._height;
    });
  }

  public beforeUpdate() {
    this._layerNames.forEach((layerName: LayerNames[number]) => {
      const layer = this._layerTable[layerName];
      layer.context.clearRect(0, 0, this._width, this._height);
    });
  }

  public afterUpdate() {
    // no impl
  }
}
