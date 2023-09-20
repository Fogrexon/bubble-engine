import { ComponentBase, TransformComponent } from '../component';
export declare abstract class GameEntry {
    private _components;
    private _destroyed;
    get destroyed(): boolean;
    private _enabled;
    get enabled(): boolean;
    set enabled(value: boolean);
    readonly transform: TransformComponent;
    objectIndex: number;
    protected constructor();
    update(deltaTime: number): void;
    destroy(): void;
    addComponent<T extends ComponentBase>(component: T): T;
    getComponent<T extends ComponentBase>(componentType: new (...args: any[]) => T): T | null;
    getComponents<T extends ComponentBase>(componentType: new (...args: any[]) => T): T[];
    getComponentInChildren<T extends ComponentBase>(componentType: new (...args: any[]) => T): T | null;
    getComponentsInChildren<T extends ComponentBase>(componentType: new (...args: any[]) => T): T[];
    removeComponent<T extends ComponentBase>(component: T): void;
    removeAllComponents(): void;
}
