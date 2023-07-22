/* eslint-disable class-methods-use-this */
import {GameEntry} from './GameEntry';

// eslint-disable-next-line no-shadow
export enum RespawnTarget {
  Player,
  Enemy,
}
export class RespawnPoint extends GameEntry {
  private target: RespawnTarget = RespawnTarget.Player;

  constructor(respawnTarget: RespawnTarget) {
    super();
    this.target = respawnTarget;
  }

  public start() {
    // do nothing
  }

  public update() {
    // do nothing
  }

  public exit() {
    // do nothing
  }

  // 座標を返す必要がある。
  // public getTransform();
}