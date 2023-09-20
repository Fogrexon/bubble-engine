import { Matrix3, Vector2 } from '../math';
import { ComponentBase } from './ComponentBase';
/**
 * GameEntryの場所を管理するコンポーネント
 */
export declare class TransformComponent extends ComponentBase {
    position: Vector2;
    rotation: number;
    scale: Vector2;
    private _worldPositionVector;
    private _isMatrixCached;
    private _isWorldMatrixCached;
    private _cachedMatrix;
    private _cachedWorldMatrix;
    parent: TransformComponent | null;
    children: TransformComponent[];
    get matrix(): Matrix3;
    get worldMatrix(): Matrix3;
    get worldPosition(): Vector2;
    get worldRotation(): number;
    addChild(child: TransformComponent): void;
    removeChild(child: TransformComponent): void;
    update(): void;
    protected onDestroy(): void;
    protected onDisable(): void;
    protected onEnable(): void;
    protected onInitialize(): void;
    protected onStart(): void;
    protected onUpdate(): void;
}
