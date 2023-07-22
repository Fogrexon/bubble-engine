/**
 * ゲーム全体のライフタイムを管理
 */
export declare class GameManager {
    private static privateInstance;
    static get instance(): GameManager;
    private requestAnimationFrameId;
    constructor();
    start(): void;
    update(): void;
    moveLevel(string: any): any;
}
