/* eslint-disable no-undef */
export type LineStyle = {
  lineWidth?: number;
  lineCap?: CanvasLineCap;
  lineJoin?: CanvasLineJoin;
  miterLimit?: number;
  lineDash?: number[];
  lineDashOffset?: number;
};

export type TextStyle = {
  font?: string;
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
  direction?: CanvasDirection;
  letterSpacing?: string;
  fontKerning?: CanvasFontKerning;
  fontStretch?: CanvasFontStretch;
  fontVariantCaps?: CanvasFontVariantCaps;
  textRendering?: CanvasTextRendering;
  wordSpacing?: string;
};

export type GraphicStyle = {
  fill?: string | CanvasGradient | CanvasPattern;
  stroke?: string | CanvasGradient | CanvasPattern;
  alpha?: number;
};

export const setLineStyle = (context: CanvasRenderingContext2D, style: LineStyle): void => {
  if (style.lineWidth) {
    context.lineWidth = style.lineWidth;
  }
  if (style.lineCap) {
    context.lineCap = style.lineCap;
  }
  if (style.lineJoin) {
    context.lineJoin = style.lineJoin;
  }
  if (style.miterLimit) {
    context.miterLimit = style.miterLimit;
  }
  if (style.lineDash) {
    context.setLineDash(style.lineDash);
  }
  if (style.lineDashOffset) {
    context.lineDashOffset = style.lineDashOffset;
  }
};

export const setTextStyle = (context: CanvasRenderingContext2D, style: TextStyle): void => {
  if (style.font) {
    context.font = style.font;
  }
  if (style.textAlign) {
    context.textAlign = style.textAlign;
  }
  if (style.textBaseline) {
    context.textBaseline = style.textBaseline;
  }
  if (style.direction) {
    context.direction = style.direction;
  }
  if (style.letterSpacing) {
    // @ts-ignore
    context.letterSpacing = style.letterSpacing;
  }
  if (style.fontKerning) {
    context.fontKerning = style.fontKerning;
  }
  if (style.fontStretch) {
    // @ts-ignore
    context.fontStretch = style.fontStretch;
  }
  if (style.fontVariantCaps) {
    // @ts-ignore
    context.fontVariantCaps = style.fontVariantCaps;
  }
  if (style.textRendering) {
    // @ts-ignore
    context.textRendering = style.textRendering;
  }
  if (style.wordSpacing) {
    // @ts-ignore
    context.wordSpacing = style.wordSpacing;
  }
};

export const setGraphicStyle = (context: CanvasRenderingContext2D, style: GraphicStyle): void => {
  if (style.fill) {
    context.fillStyle = style.fill;
  }
  if (style.stroke) {
    context.strokeStyle = style.stroke;
  }
  if (style.alpha) {
    context.globalAlpha = style.alpha;
  }
};
