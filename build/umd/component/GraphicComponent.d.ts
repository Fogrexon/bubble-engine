import { GraphicBase } from '../graphic';
import { Rect } from '../util';
import { ComponentBase } from './ComponentBase';
import { CanvasLayerInfo } from '../preprocess/CanvasLayerInfo';
/**
 * 描画系をつかさどるコンポーネント
 */
export declare class GraphicComponent extends ComponentBase {
    /**
     * グラフィックコンポーネントの回転
     */
    rotation: number;
    /**
     * グラフィックコンポーネントのバウンディングボックス
     */
    readonly boundingRect: Rect;
    readonly parts: GraphicBase[];
    readonly layer: CanvasLayerInfo;
    constructor(layer: CanvasLayerInfo, parts: GraphicBase[]);
    protected onDestroy(): void;
    protected onDisable(): void;
    protected onEnable(): void;
    protected onInitialize(): void;
    protected onStart(): void;
    protected onUpdate(): void;
}
