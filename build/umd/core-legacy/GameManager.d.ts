import { GamePipeline } from './GamePipeline';
import { LevelSelector } from '../levelControl';
/**
 * ゲーム全体のライフタイムを管理
 */
export declare class GameManager {
    private _requestAnimationFrameId;
    private _gamePipeline;
    private _levelSelector;
    constructor(gamePipeline: GamePipeline, levelSelector: LevelSelector);
    /**
     * ゲームの開始
     */
    start(): void;
    /**
     * ゲームのメインループ
     */
    gameLoop(): void;
}
