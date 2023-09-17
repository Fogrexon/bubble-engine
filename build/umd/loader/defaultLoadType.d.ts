import { LoadFileFunc } from './defaultLoader';
export type LoaderListType = Record<string, LoadFileFunc<unknown>>;
export interface FileType<T extends string | number | symbol> {
    path: string;
    type: T;
}
export declare const defaultLoaderList: {
    readonly image: LoadFileFunc<HTMLImageElement>;
    readonly audio: LoadFileFunc<HTMLAudioElement>;
};
