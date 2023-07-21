import {AudioLoader, ImageLoader, LoadFileFunc} from './defaultLoader';

export type ExporterListType = Record<string, LoadFileFunc<unknown>>;
export const defaultExporter = {
  image: ImageLoader,
  audio: AudioLoader
} as const;
