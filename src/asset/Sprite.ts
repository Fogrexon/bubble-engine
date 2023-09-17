import { AssetBase } from './AssetBase';

export class Sprite extends AssetBase<HTMLImageElement> {
  // eslint-disable-next-line no-useless-constructor
  constructor(data: HTMLImageElement) {
    super(data);
  }
}
