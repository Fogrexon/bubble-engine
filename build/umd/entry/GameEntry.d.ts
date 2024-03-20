import { ComponentBase } from '../component';
import { CollisionPreprocess, GraphicPreprocess, TransformPreprocess } from '../core/preprocess';
export declare class GameEntry {
    readonly transform: TransformPreprocess;
    readonly graphic: GraphicPreprocess;
    readonly collision: CollisionPreprocess;
    private _components;
    private _destroyed;
    get destroyed(): boolean;
    private _enabled;
    get enabled(): boolean;
    set enabled(value: boolean);
    protected constructor();
    update(): void;
    destroy(): void;
    /**
     * コンポーネントを追加する
     * @param component
     */
    addComponent<T extends ComponentBase>(component: T): T;
    /**
     * 自分のコンポーネントで最初に合致するものを取得する
     * @param componentType
     */
    getComponent<T extends ComponentBase>(componentType: new (...args: any[]) => T): T | null;
    /**
     * 自分のコンポーネントで合致するものをすべて取得する
     * @param componentType
     */
    getComponents<T extends ComponentBase>(componentType: new (...args: any[]) => T): T[];
    /**
     * 自分を含む子孫のコンポーネントを探索して最初に合致するコンポーネントを取得
     * @param componentType
     */
    getComponentInChildren<T extends ComponentBase>(componentType: new (...args: any[]) => T): T | null;
    /**
     * 自分を含む子孫のコンポーネントを探索してすべて取得する
     * @param componentType
     */
    getComponentsInChildren<T extends ComponentBase>(componentType: new (...args: any[]) => T): T[];
    /**
     * 指定したコンポーネントを削除する
     * @param component
     */
    removeComponent<T extends ComponentBase>(component: T): void;
    /**
     * 属するコンポーネントをすべて削除する
     */
    removeAllComponents(): void;
}
