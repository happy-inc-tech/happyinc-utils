/**
 * Эмуляция ES6 Map на объектах, чтобы было удобно и реактивно для Vue2.
 * Реализованы все методы Map.
 */
export type InitialMapValue = ReadonlyArray<[unknown, unknown]>;
export type EachCallback = (value: unknown, key?: unknown, map?: VueReactiveMap) => boolean | void;
export interface StoredItem {
    originalKey: unknown;
    value: unknown;
}
export default class VueReactiveMap {
    private readonly initialValue?;
    private storage;
    constructor(initialValue?: InitialMapValue | undefined);
    set(key: unknown, value: unknown): VueReactiveMap;
    has(key: unknown): boolean;
    get(key: unknown): unknown;
    keys(): unknown[];
    values(): unknown[];
    entries(): unknown[][];
    delete(key: unknown): void;
    clear(): void;
    forEach(callback: EachCallback): void;
    get size(): number;
    private getPartialItems;
    private findItemInternalKey;
    private static createInternalKey;
}
