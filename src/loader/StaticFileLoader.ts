import {LoaderListType, FileType, defaultLoaderList} from './defaultLoadType';

export class StaticFileLoader<T extends LoaderListType = typeof defaultLoaderList,
  U extends Record<string, FileType<keyof T>> = {}> {
  private loaderList: T;

  private fileList: U;

  private loadedFiles: {[K in keyof U]: Awaited<ReturnType<T[U[K]['type']]>>} = {} as {[K in keyof U]: Awaited<ReturnType<T[U[K]['type']]>>};

  constructor(loaderList: T, fileList: U) {
    this.loaderList = loaderList;
    this.fileList = fileList;
  }

  public async loadAll(progress: (rate: number) => void) {
    let loadedCount = 0;
    const loadFilePromises = Object.entries(this.fileList).map(([key, fileEntry]) => {
      const loader = this.loaderList[fileEntry.type];
      return loader(fileEntry.path, null).then((data) => {
        loadedCount += 1;
        progress(loadedCount / Object.keys(this.fileList).length);
        return [key, data];
      });
    });
    const loadedFile = await Promise.all(loadFilePromises);
    this.loadedFiles = Object.fromEntries(loadedFile) as {[K in keyof U]: Awaited<ReturnType<T[U[K]['type']]>>};
  }

  public get<K extends keyof U>(id: K): Awaited<ReturnType<T[U[K]['type']]>> {
    if (!this.loadedFiles[id]) throw new Error(`StaticFileLoader: File(${String(id)}) is not loaded`);
    return this.loadedFiles[id];
  }
}
