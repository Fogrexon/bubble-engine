import { FileLoaderType, FileType } from '../fileLoaders';

export class AssetBase<T extends FileType> {
  protected _path: string;

  /**
   * ファイルのあるパス
   */
  public get path() {
    return this._path;
  }

  protected _fileType: FileLoaderType;

  public get fileType() {
    return this._fileType;
  }

  protected _data?: T;

  /**
   * ファイルのデータ本体
   */
  public get data(): T | undefined {
    return this._data;
  }

  public set data(data: T) {
    this._data = data;
    this._isLoaded = true;
  }

  protected _isLoaded: boolean;

  /**
   * ファイルがロード済みかどうか
   */
  public get isLoaded() {
    return this._isLoaded;
  }

  constructor(path: string, fileType: FileLoaderType) {
    this._path = path;
    this._fileType = fileType;
    this._isLoaded = false;
  }
}
