import {IInputStateProvidable} from './IInputStateProvidable';

export class ScalarProvider implements IInputStateProvidable {
  private rawValue: number = 0;

  private prevValue: number = 0;

  get startPressed() {
    return this.prevValue === 0 && this.rawValue !== 0;
  }

  get endPressed() {
    return this.prevValue !== 0 && this.rawValue === 0;
  }

  get pressed() {
    return this.rawValue !== 0;
  }

  get value() {
    return this.rawValue;
  }

  public update(value: number) {
    this.prevValue = this.rawValue;
    this.rawValue = value;
  }
}
