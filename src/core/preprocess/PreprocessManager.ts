/**
 * プリプロセスの前処理、後処理を行うクラス
 */
export abstract class PreprocessManager {
  public abstract beforeProcess(deltaTime: number): void;

  public abstract afterProcess(deltaTime: number): void;
}
