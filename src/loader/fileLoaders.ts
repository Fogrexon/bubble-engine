export type ProgressFunc = ((rate: number) => void) | null;
export type LoadFileFunc<T> = (path: string, progress: ProgressFunc) => Promise<T>;

const imageFileLoader: LoadFileFunc<HTMLImageElement> = (path: string, progress: ProgressFunc) => {
  const target = new Image();
  target.src = path;
  progress?.bind(target)(0);
  return new Promise<HTMLImageElement>((resolve, reject) => {
    target.addEventListener('load', () => {
      progress?.bind(target)(1);
      resolve(target);
    });
    target.addEventListener('error', () => {
      reject();
    });
  });
};

const audioFileLoader: LoadFileFunc<HTMLAudioElement> = (path: string, progress: ProgressFunc) => {
  const target = new Audio();
  target.src = path;
  progress?.bind(target)(0);
  return new Promise<HTMLAudioElement>((resolve, reject) => {
    target.addEventListener('load', () => {
      progress?.bind(target)(1);
      resolve(target);
    });
    target.addEventListener('error', () => {
      reject();
    });
  });
};

export const fileLoaderTable = {
  image: imageFileLoader,
  audio: audioFileLoader,
} as const;

export type LoaderTableType = typeof fileLoaderTable;
export type FileLoaderType = keyof LoaderTableType;
export type FileType = Awaited<ReturnType<LoaderTableType[FileLoaderType]>>;
