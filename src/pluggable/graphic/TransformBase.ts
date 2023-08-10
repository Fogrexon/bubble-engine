import {Matrix4Base, Vector3Base} from '../math';

export abstract class TransformBase {
  abstract get position(): Vector3Base;

  abstract get rotation(): Vector3Base;

  abstract get scale(): Vector3Base;

  abstract get matrix(): Matrix4Base;

  abstract get matrixWorld(): Matrix4Base;

  abstract get matrixWorldInverse(): Matrix4Base;

  abstract add(child: TransformBase): this;

  abstract remove(child: TransformBase): this;
}