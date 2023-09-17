import { ComponentBase, Transform } from '../component';

export abstract class GameEntry {
  private _components: ComponentBase[] = [];

  private _destroyed = false;

  public get destroyed() {
    return this._destroyed;
  }

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

  protected constructor() {
    const transform = new Transform();
    this.addComponent(transform);
    this.transform = transform;
  }

  // region LifeCycle
  public update(deltaTime: number): void {
    this._components = this._components.filter((component) => !component.destroyed);

    this._components.forEach((component) => {
      component.innerUpdate(deltaTime);
    });

    this.transform.children.forEach((childTransform) => {
      childTransform.entry.update(deltaTime);
    });
  }

  public destroy() {
    this._components.forEach((component) => {
      component.innerDestroy();
    });
  }

  // endregion

  // region Process Components

  public addComponent<T extends ComponentBase>(component: T): T {
    this._components.push(component);
    component.innerAdded(this);
    return component;
  }

  public getComponent<T extends ComponentBase>(componentType: new (...args: any[]) => T): T | null {
    const foundComponent = this._components.find((component) => component instanceof componentType);
    if (foundComponent) {
      return foundComponent as T;
    }

    return null;
  }

  public getComponents<T extends ComponentBase>(componentType: new (...args: any[]) => T): T[] {
    const foundComponents = this._components.filter(
      (component) => component instanceof componentType
    );
    if (foundComponents) {
      return foundComponents as T[];
    }

    return [];
  }

  public getComponentInChildren<T extends ComponentBase>(
    componentType: new (...args: any[]) => T
  ): T | null {
    const foundComponent = this._components.find((component) => component instanceof componentType);
    if (foundComponent) {
      return foundComponent as T;
    }

    for (let i = 0; i < this.transform.children.length; i += 1) {
      const child = this.transform.children[i].entry;
      const foundChildrenComponent = child.getComponentInChildren(componentType);
      if (foundChildrenComponent) {
        return foundChildrenComponent;
      }
    }

    return null;
  }

  public getComponentsInChildren<T extends ComponentBase>(
    componentType: new (...args: any[]) => T
  ): T[] {
    const allComponents: T[] = [];
    const foundComponents = this.getComponents(componentType);
    allComponents.concat(foundComponents);

    for (let i = 0; i < this.transform.children.length; i += 1) {
      const child = this.transform.children[i].entry;
      const foundChildrenComponents = child.getComponentsInChildren(componentType);
      allComponents.concat(foundChildrenComponents);
    }

    return allComponents;
  }

  public removeComponent<T extends ComponentBase>(component: T): void {
    const foundIndex = this._components.findIndex((entry) => entry === component);
    if (foundIndex >= 0) {
      const entry = this._components[foundIndex];
      entry.innerDestroy();
    }
  }

  public removeAllComponents(): void {
    this._components.forEach((component) => {
      component.innerDestroy();
    });
    this._components = [];
  }

  // endregion
}
