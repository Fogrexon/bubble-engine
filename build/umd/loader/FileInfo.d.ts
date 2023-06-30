export interface FileInfo {
    id: string;
    path: string;
    type: string;
}
export interface FileStoreEntry<T> {
    fileInfo: FileInfo;
    data: T;
}
