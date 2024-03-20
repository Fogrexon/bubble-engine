export const mapRecord = <
  T extends Record<string, unknown>
>(
  record: T,
  fn: (key: keyof T, value: T[typeof key]) => unknown
) => Object.fromEntries(
  Object.entries(record)
    .map(([key, value]) => [key, fn(key, value as T[typeof key])])
);

export const sumRecord = (record: Record<string, number>) => Object.values(record).reduce((acc, current) => acc + current, 0);
