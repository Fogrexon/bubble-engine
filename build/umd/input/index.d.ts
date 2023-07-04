import { InputKeybind } from './InputDefinition';
export declare class InputManager {
    private keybind;
    constructor(window: Window);
    setKeybind(keybind: InputKeybind): void;
    getKey(id: string): void;
}
