# Bubble-Engine

Bubble-Engineはシンプルな2Dゲームエンジンです。
アクションゲームやシューティングゲームを簡単に作ることができます。

## Build

```bash
npm run build
```

## Install
```bash
npm install @fogrexon/bubble-engine
```

## Use

データの作成
```typescript:settings.ts
export const staticLoadAssets = {
  sprite: new SpriteAsset("path/to/sprite.png"),
  sound: new SoundAsset("path/to/sound.mp3", 'bgm'),
} as const

export const keyBinds = {
  main: {
    jump: [{
      type: 'scalarkey1',
      value: 'space'
    }, {
      type: 'scalarkey1',
      value: 'GamepadA'
    }],
    move: [{
      type: 'vector2key4',
      xPositiveValue: 'd',
      xNegativeValue: 'a',
      yPositiveValue: 's',
      yNegativeValue: 'w'
    }, {
      type: 'vector2key2',
      xValue: 'GamepadAxisLeftX',
      yValue: 'GamepadAxisLeftY'
    }]
  }
} as const

export const graphicLayers = ['background', 'main', 'ui'] as const
export const collisionLayers = ['player', 'enemy', 'bullet', 'floor'] as const
export const collisionPairs = [['player', 'enemy'], ['player', 'bullet'], ['player', 'floor'], ['enemy', 'bullet'], ['enemy', 'floor']] as const
```

データロード
```typescript:./load.ts
import { staticLoadAsset } from './settings.ts'

export const staticLoader = new StaticFileLoader(staticLoadAssets);
export const dynamicLoader = new DynamicFileLoader();
`````

レベルの作成
```typescript
import {GameEntry, GraphicComponent, SpriteGraphic, GraphicComponent} from "@fogrexon/bubble-engine";
import { graphicManager } from "./main"

export const createStartLevel = () => {
  const tempStartEntry = new GameEtnry();

  const sprite = new SpriteGraphic(staticLoader.get('button-ui'));
  sprite.size.set(100, 100);
  const tempStartGraphic = new GraphicComponent(graphicManager.getLayer("ui"), [sprite])

  tempStartEntry.addComponent(tempStartGraphic);

  const tempRootEntry = new GameEntry();
  tempRootEntry.transform.addChild(tempChildEntry.transform);

  const levelManager = new LevelManager({
    rootEntry: tempRootEntry
  });

  return levelManager;
}

export const createGameLevel = () => {
  const tempChildEntry = new GameEtnry();

  const sprite = new SpriteGraphic(staticLoader.get('sprite'));
  sprite.size.set(100, 100);
  const tempChildGraphic = new GraphicComponent(graphicManager.getLayer("main"), [sprite])

  tempChildEntry.addComponent(tempChildGraphic);

  const tempRootEntry = new GameEntry();
  tempRootEntry.transform.addChild(tempChildEntry.transform);

  const levelManager = new LevelManager({
    rootEntry: tempRootEntry
  });

  return levelManager;
}

```

必須コンポーネントの設定
```typescript:./gameCore.ts
import {
  GameManager,
  InputManager,
  GraphicPreprocessManager,
  CollisionPreprocessManager,
  LevelSelector
} from "@fogrexon/bubble-engine";
import { keyBinds, graphicLayers, collisionLayers, collisionPairs } from "./settings.ts";

export const graphicManager = new GraphicPreprocessManager(graphicLayers);
export const collisionManager = new CollisionPreprocessManager(collisionLayers, collisionPairs);
export const time = new Time();
export const inputManager = new InputManager(window, keyBinds);

const levelTable = {
  "start": createStartLevel(),
  "level1": createGameLevel()
} as const;

export const levelSelector = new LevelSelector(levelTable, 'start');

export const gamePipeline = new GamePipeline(
  time,
  inputManager,
  graphicManager,
  collisionManager,
);
export const gameManager = new GameManager(gamePipeline, levelSelector);
```

ゲームの作成
```typescript
// initialize
graphicManager.setCanvasWrapper(document.getElementById('canvas-wrapper') as HTMLDivElement);
await staticLoader.load();

// start game main loop
gameManager.start();
```

## Demos


## Author

Fogrexon
