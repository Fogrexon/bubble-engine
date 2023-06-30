type ProgressFunc = (rate: number) => void;
export type LoadFileFunc<T> = (path: string, progress: ProgressFunc) => Promise<T>;

export const LoadImage: LoadFileFunc<HTMLImageElement> = (path: string, progress: ProgressFunc) => {
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
