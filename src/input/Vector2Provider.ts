import { IInputStateProvidable } from './IInputStateProvidable';
import { Vector2 } from '../util/math';

export class Vector2Provider implements IInputStateProvidable {
  public xValue: number = 0;

  public yValue: number = 0;

  private prevXValue: number = 0;

  private prevYValue: number = 0;

  get length() {
    return Math.sqrt(this.xValue * this.xValue + this.yValue * this.yValue);
  }

  get length2() {
    return this.xValue * this.xValue + this.yValue * this.yValue;
  }

  get startPressed() {
    return this.prevXValue ** 2 + this.prevYValue ** 2 === 0 && this.length2 > 0;
  }

  get endPressed() {
    return this.prevXValue ** 2 + this.prevYValue ** 2 > 0 && this.length2 === 0;
  }

  get pressed() {
    return this.length2 > 0;
  }

  get value() {
    return new Vector2(this.xValue, this.yValue);
  }

  public update(x: number, y: number) {
    this.prevXValue = this.xValue;
    this.prevYValue = this.yValue;
    this.xValue = x;
    this.yValue = y;
  }
}
