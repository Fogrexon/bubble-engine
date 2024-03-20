import { FileLoaderType, FileType } from '../fileLoaders';
export declare class AssetBase<T extends FileType> {
    protected _path: string;
    /**
     * ファイルのあるパス
     */
    get path(): string;
    protected _fileType: FileLoaderType;
    get fileType(): "audio" | "image";
    protected _data?: T;
    /**
     * ファイルのデータ本体
     */
    get data(): T | undefined;
    set data(data: T);
    protected _isLoaded: boolean;
    /**
     * ファイルがロード済みかどうか
     */
    get isLoaded(): boolean;
    constructor(path: string, fileType: FileLoaderType);
}
