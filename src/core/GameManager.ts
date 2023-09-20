import { ManagerBase } from './ManagerBase';

/**
 * ゲーム全体のライフタイムを管理
 */
export class GameManager {
  private requestAnimationFrameId: number = -1;

  private managers: ManagerBase[];

  constructor(managers: ManagerBase[]) {
    this.managers = managers;
  }

  public start() {
    this.requestAnimationFrameId = requestAnimationFrame(this.update.bind(this));
  }

  public update() {
    this.managers.forEach((manager) => manager.beforeUpdate());
    this.requestAnimationFrameId = requestAnimationFrame(this.update.bind(this));
    this.managers.forEach((manager) => manager.afterUpdate());
  }
}
