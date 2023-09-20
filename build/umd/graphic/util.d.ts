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
};
export declare const setLineStyle: (context: CanvasRenderingContext2D, style: LineStyle) => void;
export declare const setTextStyle: (context: CanvasRenderingContext2D, style: TextStyle) => void;
export declare const setGraphicStyle: (context: CanvasRenderingContext2D, style: GraphicStyle) => void;
