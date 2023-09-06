/**
 * ゲーム全体のライフタイムを管理
 */
export class GameManager {
  // eslint-disable-next-line no-use-before-define
  private static _instance: GameManager;

  public static get instance(): GameManager {
    return GameManager._instance;
  }

  private requestAnimationFrameId: number = -1;

  constructor() {
    GameManager._instance = this;
  }

  public start() {
    this.requestAnimationFrameId = requestAnimationFrame(this.update.bind(this));
  }

  public update() {
    this.requestAnimationFrameId = requestAnimationFrame(this.update.bind(this));
  }
}
