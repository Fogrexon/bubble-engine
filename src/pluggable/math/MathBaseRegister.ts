import {Matrix2Base} from './Matrix2Base';
import {Matrix3Base} from './Matrix3Base';
import {Matrix4Base} from './Matrix4Base';
import {Vector2Base} from './Vector2Base';
import {Vector3Base} from './Vector3Base';
import {Vector4Base} from './Vector4Base';
import {ColorBase} from './ColorBase';
import {QuaternionBase} from './QuaternionBase';

export type MathBaseTable = {
  matrix2: () => Matrix2Base
  matrix3: () => Matrix3Base
  matrix4: () => Matrix4Base
  vector2: () => Vector2Base
  vector3: () => Vector3Base
  vector4: () => Vector4Base
  color: () => ColorBase
  quaternion: () => QuaternionBase
}

export class MathBaseRegister {
  public static table: MathBaseTable | null;

  static get<T extends keyof MathBaseTable = 'matrix2'>(key: T): ReturnType<MathBaseTable[T]> {
    if (!MathBaseRegister.table) {
      throw new Error('Math bases are not registered.');
    }
    return MathBaseRegister.table[key]() as ReturnType<MathBaseTable[T]>;
  }
}