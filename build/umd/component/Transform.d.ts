import { Matrix3, Vector2 } from '../math';
import { ComponentBase } from './ComponentBase';
/**
 * GameEntryの場所を管理するコンポーネント
 */
export declare class Transform extends ComponentBase {
    position: Vector2;
    rotation: number;
    scale: Vector2;
    private _worldPositionVector;
    private _isMatrixCached;
    private _isWorldMatrixCached;
    private _cachedMatrix;
    private _cachedWorldMatrix;
    parent: Transform | null;
    children: Transform[];
    get matrix(): Matrix3;
    get worldMatrix(): Matrix3;
    get worldPosition(): Vector2;
    get worldRotation(): number;
    addChild(child: Transform): void;
    removeChild(child: Transform): void;
    update(): void;
    protected onDestroy(): void;
    protected onDisable(): void;
    protected onEnable(): void;
    protected onInitialize(): void;
    protected onStart(): void;
    protected onUpdate(): void;
}
