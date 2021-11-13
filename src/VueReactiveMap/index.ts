/**
 * Эмуляция ES6 Map на объектах, чтобы было удобно и реактивно для Vue2.
 * Реализованы все методы Map.
 */

import Vue from 'vue';

export type InitialMapValue = ReadonlyArray<[unknown, unknown]>;

export type EachCallback = (
    value: unknown,
    key?: unknown,
    map?: VueReactiveMap
) => boolean | void;

export interface StoredItem {
    originalKey: unknown;
    value: unknown;
}

export default class VueReactiveMap {
    private storage: Record<string, StoredItem> = {};

    constructor(private readonly initialValue?: InitialMapValue) {
        if (this.initialValue) {
            this.initialValue.forEach(([key, value]) => this.set(key, value));
        }
    }

    public set(key: unknown, value: unknown): VueReactiveMap {
        const internalKey = this.findItemInternalKey(key);
        if (internalKey) {
            Vue.set(this.storage[internalKey], 'value', value);
        } else {
            Vue.set(this.storage, VueReactiveMap.createInternalKey(), {
                originalKey: key,
                value
            });
        }
        return this;
    }

    public has(key: unknown): boolean {
        return !!this.findItemInternalKey(key);
    }

    public get(key: unknown): unknown {
        const internalKey = this.findItemInternalKey(key);
        return internalKey ? this.storage[internalKey]?.value ?? null : null;
    }

    public keys(): unknown[] {
        return this.getPartialItems('originalKey');
    }

    public values(): unknown[] {
        return this.getPartialItems('value');
    }

    public entries(): unknown[][] {
        return Object.values(this.storage).map((item) => Object.values(item));
    }

    public delete(key: unknown): void {
        const internalKey = this.findItemInternalKey(key);
        internalKey && Vue.delete(this.storage, internalKey);
    }

    public clear(): void {
        Object.keys(this.storage).forEach((key) =>
            Vue.delete(this.storage, key)
        );
    }

    public forEach(callback: EachCallback): void {
        const mapItems = Object.values(this.storage);
        for (let i = 0; i < mapItems.length; i++) {
            const { originalKey, value } = mapItems[i];
            const shouldContinue = callback(value, originalKey, this);
            if (shouldContinue === false) break;
        }
    }

    public get size(): number {
        return Object.keys(this.storage).length;
    }

    private getPartialItems(part: keyof StoredItem): unknown[] {
        return Object.values(this.storage).map((item) => item[part]);
    }

    private findItemInternalKey(key: unknown): string | null {
        return (
            Object.entries(this.storage).find(([, item]) => {
                return (
                    item.originalKey === key ||
                    (Number.isNaN(item.originalKey) && Number.isNaN(key))
                );
            })?.[0] ?? null
        );
    }

    private static createInternalKey(): string {
        return Math.random().toString(16).slice(2, 10);
    }
}
