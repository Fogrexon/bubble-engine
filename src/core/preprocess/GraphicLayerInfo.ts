export class GraphicLayerInfo {
  public readonly canvas: HTMLCanvasElement;

  public readonly context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (context === null) {
      throw new Error('CanvasRenderingContext2D is not supported.');
    } else {
      this.context = context;
    }
  }
}
