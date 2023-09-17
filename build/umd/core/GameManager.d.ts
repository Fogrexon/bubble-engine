/**
 * ゲーム全体のライフタイムを管理
 */
export declare class GameManager {
    private static _instance;
    static get instance(): GameManager;
    private requestAnimationFrameId;
    constructor();
    start(): void;
    update(): void;
}
