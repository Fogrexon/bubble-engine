import { LoadFileFunc, ProgressFunc } from './defaultLoader';
import { defaultLoaderList, FileType } from './defaultLoadType';
export declare class DynamicFileLoader<T extends Record<string, LoadFileFunc<unknown>> = typeof defaultLoaderList> {
    private fileLoaderList;
    private loadedFiles;
    constructor(fileLoaderList: T);
    load(key: string, file: FileType<keyof T>, progress: ProgressFunc): Promise<void>;
    get<K extends keyof T>(id: string): Awaited<ReturnType<T[K]>>;
    isLoaded(id: string): boolean;
    dispose(id: string): void;
}
