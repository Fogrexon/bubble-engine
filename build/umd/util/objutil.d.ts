export declare const mapRecord: (record: Record<string, unknown>, fn: (key: string, value: unknown) => unknown) => {
    [k: string]: unknown;
};
export declare const sumRecord: (record: Record<string, number>) => number;
