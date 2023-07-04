import {
  InputKeybind,
  RawKeyValue,
  ScalarInputType,
  Vector2Key2InputType,
  Vector2Key4InputType
} from './InputDefinition';
import {Vector2Provider} from './Vector2Provider';
import {ScalarProvider} from './ScalarProvider';

type KeyContainerFromKeybind<T extends InputKeybind> = {
  [K in keyof T]: T[K] extends Vector2Key2InputType ? Vector2Provider : T[K] extends Vector2Key4InputType ? Vector2Provider : T[K] extends ScalarInputType ? ScalarProvider : never;
}

export class KeyBinder<T extends InputKeybind = {}> {
  private keybind: T;

  private keyContainer: KeyContainerFromKeybind<T>;

  constructor(keybind: T) {
    this.keybind = keybind;

    // create key containers
    const keyContainer: Record<string, Vector2Provider | ScalarProvider> = {};
    Object.keys(keybind).forEach((key) => {
      const value = keybind[key];
      switch (value.type) {
      case 'scalarkey1':
      case 'scalarkey2':
        keyContainer[key] = new ScalarProvider();
        break;
      case 'vector2key2':
      case 'vector2key4':
        keyContainer[key] = new Vector2Provider();
        break;
      default:
        throw new Error(`KeyBinder: Invalid type of keybind(${value})`);
      }
    });
    this.keyContainer = keyContainer as KeyContainerFromKeybind<T>;
  }

  public getValue<Key extends keyof T>(id: Key): KeyContainerFromKeybind<T>[Key]['value'] {
    return this.keyContainer[id].value;
  }

  public getStartPressed<Key extends keyof T>(id: Key): KeyContainerFromKeybind<T>[Key]['startPressed'] {
    return this.keyContainer[id].startPressed;
  }

  public getEndPressed<Key extends keyof T>(id: Key): KeyContainerFromKeybind<T>[Key]['endPressed'] {
    return this.keyContainer[id].endPressed;
  }

  public getPressed<Key extends keyof T>(id: Key): KeyContainerFromKeybind<T>[Key]['pressed'] {
    return this.keyContainer[id].pressed;
  }
  
  public update(keyValues: RawKeyValue) {
    Object.keys(this.keybind).forEach((key: keyof T) => {
      const keyBind = this.keybind[key];
      switch (keyBind.type) {
      case 'scalarkey1': {
        (this.keyContainer[key] as ScalarProvider).update(keyValues[keyBind.value]);
        break;
      }
      case 'scalarkey2': {
        const positiveValue = keyValues[keyBind.positiveValue];
        const negativeValue = keyValues[keyBind.negativeValue];
        (this.keyContainer[key] as ScalarProvider).update(positiveValue - negativeValue);
        break;
      }
      case 'vector2key2': {
        const xValue = keyValues[keyBind.xValue];
        const yValue = keyValues[keyBind.yValue];
        (this.keyContainer[key] as Vector2Provider).update(xValue, yValue);
        break;
      }
      case 'vector2key4': {
        const xPositiveValue = keyValues[keyBind.xPositiveValue];
        const xNegativeValue = keyValues[keyBind.xNegativeValue];
        const yPositiveValue = keyValues[keyBind.yPositiveValue];
        const yNegativeValue = keyValues[keyBind.yNegativeValue];
        (this.keyContainer[key] as Vector2Provider).update(xPositiveValue - xNegativeValue, yPositiveValue - yNegativeValue);
        break;
      }
      default: {
        throw new Error(`KeyBinder: Invalid type of keybind(${keyBind})`);
      }
      }
    });
  }
}
