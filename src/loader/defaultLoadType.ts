import { AudioLoader, ImageLoader, LoadFileFunc } from './defaultLoader';

export type LoaderListType = Record<string, LoadFileFunc<unknown>>;
export interface FileType<T extends string | number | symbol> {
  path: string;
  type: T;
}
export const defaultLoaderList = {
  image: ImageLoader,
  audio: AudioLoader,
} as const;
