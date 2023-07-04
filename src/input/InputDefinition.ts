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
  'space',
  'enter',
  'shift',
  'ctrl',
  'alt',
  'tab',
  'escape',
  'backspace',
  'capslock',
  'delete',
  'up',
  'down',
  'left',
  'right',
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
  'mouse-left',
  'mouse-right',
  'mouse-middle',
  'mouse-x',
  'mouse-y',
  'mouse-wheel',
  'gamepad-a',
  'gamepad-b',
  'gamepad-x',
  'gamepad-y',
  'gamepad-l1',
  'gamepad-l2',
  'gamepad-l3',
  'gamepad-r1',
  'gamepad-r2',
  'gamepad-r3',
  'gamepad-start',
  'gamepad-select',
  'gamepad-up',
  'gamepad-down',
  'gamepad-left',
  'gamepad-right',
  'gamepad-axis-left-x',
  'gamepad-axis-left-y',
  'gamepad-axis-right-x',
  'gamepad-axis-right-y',
  'gamepad-axis-l2',
  'gamepad-axis-r2',
  'gamepad-axis-l3',
  'gamepad-axis-r3',
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

export type InputKeybind = Record<string, ScalarInputType | Vector2InputType>;

export type RawKeyValue = Record<InputableKey, number>
