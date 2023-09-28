/* eslint-disable no-use-before-define */
import { Matrix3, Vector2 } from '../math';
import { PreprocessBase } from './PreprocessBase';

/**
 * GameEntryの場所を管理するコンポーネント
 */
export class TransformPreprocess extends PreprocessBase {
  /**
   * ローカル座標
   */
  public readonly position: Vector2 = new Vector2();

  /**
   * ローカル回転角度
   * 回転を考慮し始めると当たり判定などで判定が面倒になるので、0固定
   */
  public readonly rotation: number = 0;

  /**
   * ローカルスケール
   */
  public readonly scale: Vector2 = new Vector2(1, 1);

  /**
   * ローカル座標系での変換行列
   * update後に再計算される
   */
  public readonly matrix: Matrix3 = new Matrix3();

  /**
   * グローバル座標系での変換行列
   * update後に再計算される
   */
  public readonly worldMatrix: Matrix3 = new Matrix3();

  private _worldPosition = new Vector2();

  private _worldScale = new Vector2();

  public parent: TransformPreprocess | null = null;

  public children: TransformPreprocess[] = [];

  /**
   * グローバル座標を取得する
   */
  public get worldPosition(): Vector2 {
    const { worldMatrix } = this;
    return this._worldPosition.set(worldMatrix.m02, worldMatrix.m12);
  }

  /**
   * グローバル座標系での回転角度を取得する
   * 注意: 計算簡略化のため回転は考慮されていない
   */
  public get worldRotation(): number {
    if (this.parent) {
      return this.parent.worldRotation + this.rotation;
    }
    return this.rotation;
  }

  /**
   * グローバル座標系でのスケールを取得する
   */
  public get worldScale(): Vector2 {
    const { worldMatrix } = this;
    return this._worldScale.set(worldMatrix.m00, worldMatrix.m11);
  }

  /**
   * 子供を追加する
   * @param child
   */
  public addChild(child: TransformPreprocess): void {
    child.parent = this;
    this.children.push(child);
  }

  /**
   * 子供を削除する
   * @param child
   */
  public removeChild(child: TransformPreprocess): void {
    const index = this.children.indexOf(child);
    if (index >= 0) {
      this.children.splice(index, 1);
    }
  }

  public override process(): void {
    if (!this.entry.enabled) return;

    // 行列の更新
    this.matrix.compose(this.position, this.rotation, this.scale);
    if (this.parent) {
      this.worldMatrix.copy(this.parent.worldMatrix);
      this.worldMatrix.multiply(this.matrix);
    } else {
      this.worldMatrix.copy(this.matrix);
    }

    // 子供の更新
    this.children.forEach((child) => {
      child.process();
    });
  }
}
