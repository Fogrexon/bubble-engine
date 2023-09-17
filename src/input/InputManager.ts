import { InputableKey, inputableKeyList, InputKeybind, RawKeyValue } from './InputDefinition';
import { KeyBinder } from './KeyBinder';

export class InputManager<T extends Record<string, InputKeybind>> {
  private keybinds: T;

  private keybinders: { [K in keyof T]: KeyBinder<T[K]> };

  private rawKeyValues: RawKeyValue;

  constructor(window: Window, keybinds: T) {
    this.keybinds = keybinds;
    this.keybinders = Object.keys(keybinds).reduce((acc, key: keyof T) => {
      acc[key] = new KeyBinder(keybinds[key]);
      return acc;
    }, {} as { [K in keyof T]: KeyBinder<T[K]> });
    this.rawKeyValues = inputableKeyList.reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {} as RawKeyValue) as RawKeyValue;

    window.addEventListener('keydown', (e) => {
      this.rawKeyValues[e.key as InputableKey] = 1;
    });
    window.addEventListener('keyup', (e) => {
      this.rawKeyValues[e.key as InputableKey] = 0;
    });
  }

  public getKeybinder<Key extends keyof typeof this.keybinders>(
    key: Key
  ): (typeof this.keybinders)[Key] {
    return this.keybinders[key];
  }

  public updateKeyBinds() {
    Object.keys(this.keybinds).forEach((key) => {
      this.keybinders[key].update(this.rawKeyValues);
    });
  }
}
