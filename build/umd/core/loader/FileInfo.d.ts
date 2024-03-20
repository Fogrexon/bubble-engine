export interface FileInfo {
    path: string;
    type: string;
}
export interface FileStoreEntry<T> {
    fileInfo: FileInfo;
    data: T;
}
