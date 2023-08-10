import {Matrix2Base} from './Matrix2Base';
import {Matrix3Base} from './Matrix3Base';
import {Matrix4Base} from './Matrix4Base';
import {Vector2Base} from './Vector2Base';
import {Vector3Base} from './Vector3Base';
import {Vector4Base} from './Vector4Base';
import {ColorBase} from './ColorBase';
import {QuaternionBase} from './QuaternionBase';

export interface MathBaseTable {
  matrix2: typeof Matrix2Base
  matrix3: typeof Matrix3Base
  matrix4: typeof Matrix4Base
  vector2: typeof Vector2Base
  vector3: typeof Vector3Base
  vector4: typeof Vector4Base
  color: typeof ColorBase
  quaternion: typeof QuaternionBase
}

export class MathBaseRegister {
  public static table: MathBaseTable = {
    matrix2: Matrix2Base,
    matrix3: Matrix3Base,
    matrix4: Matrix4Base,
    vector2: Vector2Base,
    vector3: Vector3Base,
    vector4: Vector4Base,
    color: ColorBase,
    quaternion: QuaternionBase
  };

  static get<T extends keyof MathBaseTable>(key: T): MathBaseTable[T] {
    return MathBaseRegister.table[key];
  }
}