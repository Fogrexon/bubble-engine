import {LevelManager} from "../levelControl/LevelManager";
import {InputManager} from "../input";

export class GameManager {
  private static _instance: GameManager;

  public static get instance(): GameManager {
    return GameManager._instance;
  }
  constructor() {
    GameManager._instance = this;

  }

  public start() {

  }

  public update() {

  }

  public moveLevel(string)

}
