import { InputKeybind, RawKeyValue, ScalarInputType, Vector2Key2InputType, Vector2Key4InputType } from './InputDefinition';
import { Vector2Provider } from './Vector2Provider';
import { ScalarProvider } from './ScalarProvider';
type KeyContainerFromKeybind<T extends InputKeybind> = {
    [K in keyof T]: T[K] extends Vector2Key2InputType ? Vector2Provider : T[K] extends Vector2Key4InputType ? Vector2Provider : T[K] extends ScalarInputType ? ScalarProvider : never;
};
export declare class KeyBinder<T extends InputKeybind = {}> {
    private keybind;
    private keyContainer;
    constructor(keybind: T);
    getValue<Key extends keyof T>(id: Key): KeyContainerFromKeybind<T>[Key]['value'];
    getStartPressed<Key extends keyof T>(id: Key): KeyContainerFromKeybind<T>[Key]['startPressed'];
    getEndPressed<Key extends keyof T>(id: Key): KeyContainerFromKeybind<T>[Key]['endPressed'];
    getPressed<Key extends keyof T>(id: Key): KeyContainerFromKeybind<T>[Key]['pressed'];
    update(keyValues: RawKeyValue): void;
}
export {};
