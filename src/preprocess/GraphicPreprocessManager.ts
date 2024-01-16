import { CanvasLayerInfo } from './CanvasLayerInfo';
import { PreprocessManager } from './PreprocessManager';

export class GraphicPreprocessManager<
  LayerNames extends string[] = string[]
> extends PreprocessManager {
  private _layerNames: LayerNames;

  private _layerTable: Record<LayerNames[number], CanvasLayerInfo>;

  private _screenshotCanvas: HTMLCanvasElement;

  private _canvasWrapper: HTMLElement | null;

  private _width: number = 0;

  private _height: number = 0;

  public get width() {
    return this._width;
  }

  public get height() {
    return this._height;
  }

  constructor(layers: LayerNames) {
    super();
    this._layerNames = layers;
    this._canvasWrapper = null;

    this._layerTable = {} as Record<LayerNames[number], CanvasLayerInfo>;

    layers.forEach((layerName: LayerNames[number]) => {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      this._layerTable[layerName] = {
        canvas,
        context: canvas.getContext('2d') as CanvasRenderingContext2D,
      };
    });

    this._screenshotCanvas = document.createElement('canvas');

    this.resetSize();

    window.addEventListener('resize', this.resetSize.bind(this));
  }

  public setCanvasWrapper(canvasWrapper: HTMLElement) {
    this._canvasWrapper = canvasWrapper;
    this._layerNames.forEach((layerName: LayerNames[number]) => {
      const layer = this._layerTable[layerName];
      layer.canvas.style.position = 'absolute';
      layer.canvas.style.top = '0';
      layer.canvas.style.left = '0';
      canvasWrapper.appendChild(layer.canvas);
    });
    this.resetSize();
  }

  public getLayer(id: LayerNames[number]): CanvasLayerInfo {
    return this._layerTable[id];
  }

  private resetSize() {
    if (this._canvasWrapper === null) {
      return;
    }
    const rect = this._canvasWrapper.getBoundingClientRect();
    this._width = rect.width;
    this._height = rect.height;
    this._layerNames.forEach((layerName: LayerNames[number]) => {
      const layer = this._layerTable[layerName];
      layer.canvas.width = this._width;
      layer.canvas.height = this._height;
    });
  }

  public beforeProcess() {
    if (this._canvasWrapper === null) {
      console.error('canvasWrapper is not set.');
    }
    this._layerNames.forEach((layerName: LayerNames[number]) => {
      const layer = this._layerTable[layerName];
      layer.context.clearRect(0, 0, this._width, this._height);
    });
  }

  public afterProcess() {
    // no impl
  }

  public getScreenshot() {
    this._screenshotCanvas.width = this._width;
    this._screenshotCanvas.height = this._height;
    const context = this._screenshotCanvas.getContext('2d');
    if (context === null) {
      throw new Error('CanvasRenderingContext2D is not supported.');
    }
    this._layerNames.forEach((layerName: LayerNames[number]) => {
      const layer = this._layerTable[layerName];
      context.drawImage(layer.canvas, 0, 0);
    });
    return this._screenshotCanvas;
  }
}
