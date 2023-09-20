import { ComponentBase } from './ComponentBase';
import { GraphicBase } from '../graphic';
import { CanvasLayerInfo } from '../core';
import { Rect } from '../util';
export declare class GraphicComponent extends ComponentBase {
    readonly parts: GraphicBase[];
    private readonly _layer;
    readonly boundingRect: Rect;
    constructor(layer: CanvasLayerInfo, parts: GraphicBase[]);
    protected onDestroy(): void;
    protected onDisable(): void;
    protected onEnable(): void;
    protected onInitialize(): void;
    protected onStart(): void;
    protected onUpdate(): void;
}
