import { IInputStateProvidable } from './IInputStateProvidable';
export declare class ScalarProvider implements IInputStateProvidable {
    private rawValue;
    private prevValue;
    get startPressed(): boolean;
    get endPressed(): boolean;
    get pressed(): boolean;
    get value(): number;
    update(value: number): void;
}
