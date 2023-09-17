import { LoaderListType, FileType, defaultLoaderList } from './defaultLoadType';
export declare class StaticFileLoader<T extends LoaderListType = typeof defaultLoaderList, U extends Record<string, FileType<keyof T>> = {}> {
    private loaderList;
    private fileList;
    private loadedFiles;
    constructor(loaderList: T, fileList: U);
    loadAll(progress: (rate: number) => void): Promise<void>;
    get<K extends keyof U>(id: K): Awaited<ReturnType<T[U[K]['type']]>>;
}
