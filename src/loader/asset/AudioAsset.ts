import { AssetBase } from './AssetBase';

export type AudioAssetType = 'bgm' | 'sfx' | 'ui';

export class AudioAsset extends AssetBase<HTMLAudioElement> {
  /**
   * 音声アセットのタイプ
   */
  public readonly audioType: AudioAssetType;

  /**
   * ループ開始時間
   * bgm以外では効果なし
   */
  public loopStartTime = 0;

  /**
   * ループ終了時間
   * bgm以外では効果なし
   */
  public loopEndTime = 0;

  /**
   * 音声の長さ
   */
  public get length() {
    return this.data?.duration || 0;
  }

  constructor(path: string, audioType: AudioAssetType) {
    super(path, 'audio');
    this.audioType = audioType;
  }
}
