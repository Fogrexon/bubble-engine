import { GraphicComponent } from '../../component';
import { GameEntry } from '../../entry';
/**
 * 描画系をつかさどるコンポーネント
 */
export declare class GraphicPreprocess {
    private readonly entry;
    /**
     * 描画順
     */
    index: number;
    constructor(entry: GameEntry);
    process(): void;
    protected draw(comp: GraphicComponent): void;
}
