import { InputKeybind } from './InputDefinition';
export declare class KeyBinder<T extends InputKeybind> {
    private keybind;
    private keyContainer;
    constructor(keybind: T);
    getScalarValue(id: keyof T): any;
    getVector2Value(id: keyof T): any;
    getStartPressed(id: keyof T): boolean;
}
