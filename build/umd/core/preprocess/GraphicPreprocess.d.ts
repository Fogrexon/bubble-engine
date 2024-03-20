import { PreprocessBase } from './PreprocessBase';
import { GraphicComponent } from '../../component';
/**
 * 描画系をつかさどるコンポーネント
 */
export declare class GraphicPreprocess extends PreprocessBase {
    /**
     * 描画順
     */
    index: number;
    process(): void;
    protected draw(comp: GraphicComponent): void;
}
