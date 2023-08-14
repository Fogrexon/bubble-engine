import {ComponentBase,Transform} from '../component';

export abstract class GameEntry {

  private _components: ComponentBase[];

  private _enabled = true;

  public get enabled() {
    return this._enabled;
  }

  public set enabled(value: boolean) {
    if (this._enabled && !value) {
      this._components.forEach((component) => {
        component.innerDisable();
      });
      this._enabled = value;
    } else if (!this._enabled && value) {
      this._enabled = value;
      this._components.forEach((component) => {
        component.innerEnable();
      });
    }
  }

  public readonly transform;

  constructor() {
    const transform = new Transform(this);
    this._components = [ transform ];
    this.transform = transform;
  }

  public update(deltaTime: number): void {
    this._components.forEach((component) => {
      component.innerUpdate(deltaTime);
    });

    this.transform.children.forEach(childTransform => {
      childTransform.entry.update(deltaTime);
    });
  }
}
