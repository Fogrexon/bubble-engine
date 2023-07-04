declare const inputableKeyList: string[];
type InputableKey = (typeof inputableKeyList)[number];
export interface Vector2Key2InputType {
    type: 'vector2key2';
    xValue: InputableKey;
    yValue: InputableKey;
}
export interface Vector2Key4InputType {
    type: 'vector2key4';
    xPositiveValue: InputableKey;
    xNegativeValue: InputableKey;
    yPositiveValue: InputableKey;
    yNegativeValue: InputableKey;
}
export type Vector2InputType = Vector2Key2InputType | Vector2Key4InputType;
export interface ScalarInputType {
    type: 'scalar';
    value: InputableKey;
}
export type InputKeybind = Record<string, ScalarInputType | Vector2InputType>;
export {};
