/**
 * ゲーム全体のライフタイムを管理
 */
export class GameManager {
  // eslint-disable-next-line no-use-before-define
  private static privateInstance: GameManager;

  public static get instance(): GameManager {
    return GameManager.privateInstance;
  }

  private requestAnimationFrameId: number = -1;

  constructor() {
    GameManager.privateInstance = this;
  }

  public start() {
    this.requestAniamationFrameId = requestAnimationFrame(this.update.bind(this));
  }

  public update() {
    this.requestAnimationFrameId = requestAnimationFrame(this.update.bind(this));
  }

  public moveLevel(string);
}
