/**
 * プリプロセスの前処理、後処理を行うクラス
 */
export declare abstract class PreprocessManager {
    abstract beforeProcess(deltaTime: number): void;
    abstract afterProcess(deltaTime: number): void;
}
