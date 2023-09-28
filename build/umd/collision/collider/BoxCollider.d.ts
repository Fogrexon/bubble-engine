import { ColliderBase } from './ColliderBase';
import { Vector2 } from '../../math';
export type SimpleAreaStruct = {
    left: number;
    top: number;
    right: number;
    bottom: number;
};
/**
 * 長方形形状のコライダー
 */
export declare class BoxCollider extends ColliderBase {
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
    constructor(offsetX: number, offsetY: number, width: number, height: number);
    getWorldBox(): SimpleAreaStruct;
}
