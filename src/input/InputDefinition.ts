export const inputableKeyList = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  ' ',
  'Enter',
  'Shift',
  'Control',
  'Alt',
  'Tab',
  'Escape',
  'Backspace',
  'CapsLock',
  'Delete',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'MouseLeft',
  'MouseRight',
  'MouseMiddle',
  'MouseX',
  'MouseY',
  'MouseWheel',
  'GamepadA',
  'GamepadB',
  'GamepadX',
  'GamepadY',
  'GamepadL1',
  'GamepadL2',
  'GamepadL3',
  'GamepadR1',
  'GamepadR2',
  'GamepadR3',
  'GamepadStart',
  'GamepadSelect',
  'GamepadUp',
  'GamepadDown',
  'GamepadLeft',
  'GamepadRight',
  'GamepadAxisLeftX',
  'GamepadAxisLeftY',
  'GamepadAxisRightX',
  'GamepadAxisRightY',
  'GamepadAxisL2',
  'GamepadAxisR2',
  'GamepadAxisL3',
  'GamepadAxisR3',
] as const;

export type InputableKey = (typeof inputableKeyList)[number];

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

export interface ScalarKey1InputType {
  type: 'scalarkey1';
  value: InputableKey;
}

export interface ScalarKey2InputType {
  type: 'scalarkey2';
  positiveValue: InputableKey;
  negativeValue: InputableKey;
}

export type ScalarInputType = ScalarKey1InputType | ScalarKey2InputType;

export type InputKeybind = Record<string, ScalarInputType[] | Vector2InputType[]>;

export type RawKeyValue = Record<InputableKey, number>;
