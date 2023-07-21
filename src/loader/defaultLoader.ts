type ProgressFunc = (rate: number) => void;
export type LoadFileFunc<T> = (path: string, progress: ProgressFunc) => Promise<T>;

export const ImageLoader: LoadFileFunc<HTMLImageElement> = (path: string, progress: ProgressFunc) => {
  const target = new Image();
  target.src = path;
  progress.bind(target)(0);
  return new Promise<HTMLImageElement>((resolve, reject) => {
    target.addEventListener('load', () => {
      progress.bind(target)(1);
      resolve(target);
    });
    target.addEventListener('error', () => {
      reject();
    });
  });
};

export const AudioLoader: LoadFileFunc<HTMLAudioElement> = (path: string, progress: ProgressFunc) => {
  const target = new Audio();
  target.src = path;
  progress.bind(target)(0);
  return new Promise<HTMLAudioElement>((resolve, reject) => {
    target.addEventListener('load', () => {
      progress.bind(target)(1);
      resolve(target);
    });
    target.addEventListener('error', () => {
      reject();
    });
  });
};
