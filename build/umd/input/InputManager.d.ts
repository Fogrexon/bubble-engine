import { InputKeybind } from './InputDefinition';
export declare class InputManager<T extends Record<string, InputKeybind> = Record<string, InputKeybind>> {
    private keybinds;
    private keybinders;
    private rawKeyValues;
    constructor(window: Window, keybinds: T);
    getKeybinder<Key extends keyof typeof this.keybinders>(key: Key): (typeof this.keybinders)[Key];
    updateKeyBinds(): void;
}
