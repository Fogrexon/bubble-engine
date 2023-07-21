import {LoadFileFunc, ProgressFunc} from './defaultLoader';
import {defaultLoaderList, FileType} from './defaultLoadType';

export class DynamicFileLoader<T extends Record<string, LoadFileFunc<unknown>> = typeof defaultLoaderList> {
  private fileLoaderList: T;

  private loadedFiles: Record<string, (Awaited<ReturnType<T[keyof T]>>) | null> = {};

  constructor(fileLoaderList: T) {
    this.fileLoaderList = fileLoaderList;
  }

  public async load(key: string, file: FileType<keyof T>, progress: ProgressFunc) {
    if (this.loadedFiles[key] !== undefined) throw new Error(`DynamicFileLoader: File(${String(key)}) is already loaded`);
    const loader = this.fileLoaderList[file.type];
    this.loadedFiles[key] = null;
    this.loadedFiles[key] = await loader(file.path, progress) as Awaited<ReturnType<T[keyof T]>>;
  }

  public get<K extends keyof T>(id: string): Awaited<ReturnType<T[K]>> {
    if (!this.loadedFiles[id]) throw new Error(`DynamicFileLoader: File(${String(id)}) is not loaded`);
    return this.loadedFiles[id] as Awaited<ReturnType<T[K]>>;
  }

  public isLoaded(id: string): boolean {
    return this.loadedFiles[id] !== undefined;
  }

  public dispose(id: string) {
    if (!this.loadedFiles[id]) throw new Error(`DynamicFileLoader: File(${String(id)}) is not loaded`);
    delete this.loadedFiles[id];
  }
}