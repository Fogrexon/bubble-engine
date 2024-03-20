export const mapRecord = (record: Record<string, unknown>, fn: (key: string, value: unknown) => unknown) => Object.fromEntries(Object.entries(record).map(([key, value]) => [key, fn(key, value)]));

export const sumRecord = (record: Record<string, number>) => Object.values(record).reduce((acc, current) => acc + current, 0);
