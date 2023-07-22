export abstract class GameEntry {
  public abstract start(): void;

  public abstract update(): void;

  public abstract exit(): void;
}
