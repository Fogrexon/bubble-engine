import { AssetBase } from './AssetBase';
export type AudioAssetType = 'bgm' | 'sfx' | 'ui';
export declare class AudioAsset extends AssetBase<HTMLAudioElement> {
    /**
     * 音声アセットのタイプ
     */
    readonly audioType: AudioAssetType;
    /**
     * ループ開始時間
     * bgm以外では効果なし
     */
    loopStartTime: number;
    /**
     * ループ終了時間
     * bgm以外では効果なし
     */
    loopEndTime: number;
    /**
     * 音声の長さ
     */
    get length(): number;
    constructor(path: string, audioType: AudioAssetType);
}
