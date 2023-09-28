import { ColliderComponent } from '../../component';
import { GameEntry } from '../../entry';
export declare class ColliderBase {
    /**
     * このコライダーがアタッチされているColliderComponent
     */
    private _component;
    get component(): ColliderComponent;
    /**
     * コライダーがアタッチされているエントリーを取得するショートカット
     */
    get entry(): GameEntry;
    setColliderComponent(colliderComponent: ColliderComponent): void;
}
