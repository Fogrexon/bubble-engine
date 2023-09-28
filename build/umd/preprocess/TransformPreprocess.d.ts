import { Matrix3, Vector2 } from '../math';
import { PreprocessBase } from './PreprocessBase';
/**
 * GameEntryの場所を管理するコンポーネント
 */
export declare class TransformPreprocess extends PreprocessBase {
    /**
     * ローカル座標
     */
    readonly position: Vector2;
    /**
     * ローカル回転角度
     * 回転を考慮し始めると当たり判定などで判定が面倒になるので、0固定
     */
    readonly rotation: number;
    /**
     * ローカルスケール
     */
    readonly scale: Vector2;
    /**
     * ローカル座標系での変換行列
     * update後に再計算される
     */
    readonly matrix: Matrix3;
    /**
     * グローバル座標系での変換行列
     * update後に再計算される
     */
    readonly worldMatrix: Matrix3;
    private _worldPosition;
    private _worldScale;
    parent: TransformPreprocess | null;
    children: TransformPreprocess[];
    /**
     * グローバル座標を取得する
     */
    get worldPosition(): Vector2;
    /**
     * グローバル座標系での回転角度を取得する
     * 注意: 計算簡略化のため回転は考慮されていない
     */
    get worldRotation(): number;
    /**
     * グローバル座標系でのスケールを取得する
     */
    get worldScale(): Vector2;
    /**
     * 子供を追加する
     * @param child
     */
    addChild(child: TransformPreprocess): void;
    /**
     * 子供を削除する
     * @param child
     */
    removeChild(child: TransformPreprocess): void;
    process(): void;
}
