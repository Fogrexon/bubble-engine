type ProgressFunc = (rate: number) => void;
type FileLoaderFunc<T> = (path: string, progress: ProgressFunc) => Promise<T>;
export declare const fileLoaderTable: {
    image: FileLoaderFunc<HTMLImageElement>;
};
export {};
