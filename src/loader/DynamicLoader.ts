import { FileInfo, FileStoreEntry } from "./FileInfo";
import { fileLoaderTable } from "./fileLoader";

export class DynamicLoader {
  private loadedFiles: Record<string, FileStoreEntry<unknown>> = {};

  public async load(loadFile: FileInfo, progress: (rate: number) => void) {
    if (this.loadedFiles[loadFile.id]) return;
    const loaders = Object.keys(fileLoaderTable);
    if (loaders.indexOf(loadFile.type) === -1) throw new Error(`File type ${loadFile.type} is not supported`);
    const loaderType: keyof typeof fileLoaderTable = loadFile.type as keyof typeof fileLoaderTable;

    const data = await fileLoaderTable[loaderType](loadFile.path, progress);
    this.loadedFiles[loadFile.id] = {
      fileInfo: loadFile,
      data
    };
  }

  public get<T>(id: string): T {
    return this.loadedFiles[id].data as T;
  }

  public unload(id: string) {
    delete this.loadedFiles[id];
  }
}