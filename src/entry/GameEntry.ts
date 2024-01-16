import { ComponentBase } from '../component';
import { CollisionPreprocess, GraphicPreprocess, TransformPreprocess } from '../preprocess';

export class GameEntry {
  // プリプロセス系
  public readonly transform: TransformPreprocess;

  public readonly graphic: GraphicPreprocess;

  public readonly collision: CollisionPreprocess;

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

  protected constructor() {
    this.transform = new TransformPreprocess(this);
    this.graphic = new GraphicPreprocess(this);
    this.collision = new CollisionPreprocess(this);
  }

  // region LifeCycle
  public update(): void {
    this._components = this._components.filter((component) => !component.destroyed);

    this._components.forEach((component) => {
      component.innerUpdate();
    });

    const childrenEntry = this.transform.children.map((childTransform) => childTransform.entry);

    childrenEntry.forEach((child) => {
      child.update();
    });
  }

  public destroy() {
    this._components.forEach((component) => {
      component.innerDestroy();
    });
  }

  // endregion

  // region Process Components

  /**
   * コンポーネントを追加する
   * @param component
   */
  public addComponent<T extends ComponentBase>(component: T): T {
    this._components.push(component);
    component.innerAdded(this);
    return component;
  }

  /**
   * 自分のコンポーネントで最初に合致するものを取得する
   * @param componentType
   */
  public getComponent<T extends ComponentBase>(componentType: new (...args: any[]) => T): T | null {
    const foundComponent = this._components.find((component) => component instanceof componentType);
    if (foundComponent) {
      return foundComponent as T;
    }

    return null;
  }

  /**
   * 自分のコンポーネントで合致するものをすべて取得する
   * @param componentType
   */
  public getComponents<T extends ComponentBase>(componentType: new (...args: any[]) => T): T[] {
    const foundComponents = this._components.filter(
      (component) => component instanceof componentType
    );
    if (foundComponents) {
      return foundComponents as T[];
    }

    return [];
  }

  /**
   * 自分を含む子孫のコンポーネントを探索して最初に合致するコンポーネントを取得
   * @param componentType
   */
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

  /**
   * 自分を含む子孫のコンポーネントを探索してすべて取得する
   * @param componentType
   */
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

  /**
   * 指定したコンポーネントを削除する
   * @param component
   */
  public removeComponent<T extends ComponentBase>(component: T): void {
    const foundIndex = this._components.findIndex((entry) => entry === component);
    if (foundIndex >= 0) {
      const entry = this._components[foundIndex];
      entry.innerDestroy();
    }
  }

  /**
   * 属するコンポーネントをすべて削除する
   */
  public removeAllComponents(): void {
    this._components.forEach((component) => {
      component.innerDestroy();
    });
    this._components = [];
  }

  // endregion
}
