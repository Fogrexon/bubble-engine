/* eslint-disable no-use-before-define */
import { Matrix3, Vector2 } from '../math';
import { ComponentBase } from './ComponentBase';

/**
 * GameEntryの場所を管理するコンポーネント
 */
export class Transform extends ComponentBase {
  public position: Vector2 = new Vector2();

  public rotation: number = 0;

  public scale: Vector2 = new Vector2(1, 1);

  private _worldPositionVector = new Vector2();

  private _isMatrixCached = false;

  private _isWorldMatrixCached = false;

  private _cachedMatrix: Matrix3 = new Matrix3();

  private _cachedWorldMatrix: Matrix3 = new Matrix3();

  public parent: Transform | null = null;

  public children: Transform[] = [];

  public get matrix(): Matrix3 {
    if (!this._isMatrixCached) {
      this._cachedMatrix.compose(this.position, this.rotation, this.scale);
      this._isMatrixCached = true;
    }
    return this._cachedMatrix;
  }

  public get worldMatrix(): Matrix3 {
    const { matrix } = this;
    if (!this._isWorldMatrixCached) {
      if (this.parent) {
        this._cachedWorldMatrix.copy(this.parent.worldMatrix);
        this._cachedWorldMatrix.multiply(matrix);
      } else {
        this._cachedWorldMatrix.copy(matrix);
      }
      this._isWorldMatrixCached = true;
    }
    return this._cachedWorldMatrix;
  }

  public get worldPosition(): Vector2 {
    const { worldMatrix } = this;
    return this._worldPositionVector.set(worldMatrix.m02, worldMatrix.m12);
  }

  public get worldRotation(): number {
    if (this.parent) {
      return this.parent.worldRotation + this.rotation;
    }
    return this.rotation;
  }

  public addChild(child: Transform): void {
    child.parent = this;
    this.children.push(child);
  }

  public removeChild(child: Transform): void {
    const index = this.children.indexOf(child);
    if (index >= 0) {
      this.children.splice(index, 1);
    }
  }

  public update(): void {
    this.children.forEach((child) => {
      child.update();
    });
  }

  protected onDestroy(): void {
    this.parent?.removeChild(this);
  }

  protected onDisable(): void {
    // no impl
  }

  protected onEnable(): void {
    // no impl
  }

  protected onInitialize(): void {
    // no impl
  }

  protected onStart(): void {
    // no impl
  }

  protected onUpdate(): void {
    // no impl
  }
}
