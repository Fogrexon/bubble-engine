import { IInputStateProvidable } from './IInputStateProvidable';
export declare class Vector2Provider implements IInputStateProvidable {
    xValue: number;
    yValue: number;
    private prevXValue;
    private prevYValue;
    get length(): number;
    get length2(): number;
    get startPressed(): boolean;
    get endPressed(): boolean;
    get pressed(): boolean;
    get value(): any;
    update(x: number, y: number): void;
}
