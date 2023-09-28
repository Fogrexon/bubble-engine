import { ColliderComponent } from '../../component';
import { GameEntry } from '../../entry';

export class ColliderBase {
  /**
   * このコライダーがアタッチされているColliderComponent
   */
  private _component: ColliderComponent | null = null;

  public get component(): ColliderComponent {
    if (!this._component) throw new Error('BoxCollider: collider is not assigned.');
    return this._component;
  }

  /**
   * コライダーがアタッチされているエントリーを取得するショートカット
   */
  public get entry(): GameEntry {
    return this.component.entry;
  }

  public setColliderComponent(colliderComponent: ColliderComponent): void {
    this._component = colliderComponent;
  }
}
