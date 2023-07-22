export type ProgressFunc = ((rate: number) => void) | null;
export type LoadFileFunc<T> = (path: string, progress: ProgressFunc) => Promise<T>;
export declare const ImageLoader: LoadFileFunc<HTMLImageElement>;
export declare const AudioLoader: LoadFileFunc<HTMLAudioElement>;
