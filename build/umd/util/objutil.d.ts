export declare const mapRecord: <T extends Record<string, unknown>>(record: T, fn: (key: keyof T, value: T[keyof T]) => unknown) => {
    [k: string]: unknown;
};
export declare const sumRecord: (record: Record<string, number>) => number;
