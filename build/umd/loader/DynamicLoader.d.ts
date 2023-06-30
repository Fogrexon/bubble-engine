import { FileInfo } from './FileInfo';
export declare class DynamicLoader {
    private loadedFiles;
    load(loadFile: FileInfo, progress: (rate: number) => void): Promise<void>;
    get<T>(id: string): T;
    unload(id: string): void;
}
