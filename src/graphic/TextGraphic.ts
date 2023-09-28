import { GraphicBase } from './GraphicBase';
import { Rect } from '../util';
import { Vector2 } from '../math';
import {
  GraphicStyle,
  LineStyle,
  setGraphicStyle,
  setLineStyle,
  setTextStyle,
  TextStyle,
} from './util';
import { CanvasLayerInfo } from '../preprocess';

export class TextGraphic extends GraphicBase {
  public readonly position = new Vector2();

  public text: string;

  public font: string;

  public style: LineStyle & TextStyle & GraphicStyle;

  constructor(text: string, font: string, style: LineStyle & TextStyle & GraphicStyle) {
    super();
    this.text = text;
    this.font = font;
    this.style = style;
  }

  public render(layer: CanvasLayerInfo): Rect {
    const { context } = layer;
    context.font = this.font;
    setLineStyle(context, this.style);
    setTextStyle(context, this.style);
    setGraphicStyle(context, this.style);

    if (this.style.fill) {
      context.fillText(this.text, this.position.x, this.position.y);
    }
    if (this.style.stroke) {
      context.strokeText(this.text, this.position.x, this.position.y);
    }

    const metrics = context.measureText(this.text);
    this._boundingBox.set(
      metrics.actualBoundingBoxLeft,
      metrics.actualBoundingBoxAscent,
      metrics.actualBoundingBoxRight - metrics.actualBoundingBoxLeft,
      metrics.actualBoundingBoxDescent + metrics.actualBoundingBoxAscent
    );
    return this._boundingBox;
  }
}
