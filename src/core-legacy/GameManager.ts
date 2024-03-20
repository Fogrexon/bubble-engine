import { GamePipeline } from './GamePipeline';
import { LevelSelector } from '../levelControl';

/**
 * ゲーム全体のライフタイムを管理
 */
export class GameManager {
  private _requestAnimationFrameId: number = -1;

  private _gamePipeline: GamePipeline;

  private _levelSelector: LevelSelector;

  constructor(gamePipeline: GamePipeline, levelSelector: LevelSelector) {
    this._gamePipeline = gamePipeline;
    this._levelSelector = levelSelector;
  }

  /**
   * ゲームの開始
   */
  public start() {
    this._requestAnimationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
  }

  /**
   * ゲームのメインループ
   */
  public gameLoop() {
    this._requestAnimationFrameId = requestAnimationFrame(this.gameLoop.bind(this));

    const currentLevelManager = this._levelSelector.currentLevel();
    this._gamePipeline.process(currentLevelManager);
  }
}
