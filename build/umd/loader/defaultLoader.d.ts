type ProgressFunc = (rate: number) => void;
export type LoadFileFunc<T> = (path: string, progress: ProgressFunc) => Promise<T>;
export declare const LoadImage: LoadFileFunc<HTMLImageElement>;
export {};
