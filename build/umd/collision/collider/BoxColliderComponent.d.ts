import { Vector2 } from '../../math';
import { ColliderComponent } from '../../component';
import { CollisionLayerInfo } from '../../core/preprocess';
export type SimpleAreaStruct = {
    left: number;
    top: number;
    right: number;
    bottom: number;
};
/**
 * 長方形形状のコライダー
 */
export declare class BoxColliderComponent extends ColliderComponent {
    /**
     * 長方形のサイズ
     * x = width
     * y = height
     */
    readonly size: Vector2;
    /**
     * 長方形のオフセット
     */
    readonly offset: Vector2;
    constructor(layer: CollisionLayerInfo, offsetX: number, offsetY: number, width: number, height: number);
    getWorldBox(): SimpleAreaStruct;
}
