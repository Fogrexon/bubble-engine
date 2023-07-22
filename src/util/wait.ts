export const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const waitFrame = () =>
  new Promise((resolve) => {
    requestAnimationFrame(resolve);
  });
