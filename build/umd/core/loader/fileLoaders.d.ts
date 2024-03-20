export type ProgressFunc = ((rate: number) => void) | null;
export type LoadFileFunc<T> = (path: string, progress: ProgressFunc) => Promise<T>;
export declare const fileLoaderTable: {
    readonly image: LoadFileFunc<HTMLImageElement>;
    readonly audio: LoadFileFunc<HTMLAudioElement>;
};
export type LoaderTableType = typeof fileLoaderTable;
export type FileLoaderType = keyof LoaderTableType;
export type FileType = Awaited<ReturnType<LoaderTableType[FileLoaderType]>>;
