/**
 * Эмуляция ES6 Map на объектах, чтобы было удобно и реактивно для Vue2.
 * Реализованы все методы Map.
 */
import Vue from 'vue';
export default class VueReactiveMap {
    constructor(initialValue) {
        this.initialValue = initialValue;
        this.storage = {};
        if (this.initialValue) {
            this.initialValue.forEach(([key, value]) => this.set(key, value));
        }
    }
    set(key, value) {
        const internalKey = this.findItemInternalKey(key);
        if (internalKey) {
            Vue.set(this.storage[internalKey], 'value', value);
        }
        else {
            Vue.set(this.storage, VueReactiveMap.createInternalKey(), {
                originalKey: key,
                value
            });
        }
        return this;
    }
    has(key) {
        return !!this.findItemInternalKey(key);
    }
    get(key) {
        const internalKey = this.findItemInternalKey(key);
        return internalKey ? this.storage[internalKey]?.value ?? null : null;
    }
    keys() {
        return this.getPartialItems('originalKey');
    }
    values() {
        return this.getPartialItems('value');
    }
    entries() {
        return Object.values(this.storage).map((item) => Object.values(item));
    }
    delete(key) {
        const internalKey = this.findItemInternalKey(key);
        internalKey && Vue.delete(this.storage, internalKey);
    }
    clear() {
        Object.keys(this.storage).forEach((key) => Vue.delete(this.storage, key));
    }
    forEach(callback) {
        const mapItems = Object.values(this.storage);
        for (let i = 0; i < mapItems.length; i++) {
            const { originalKey, value } = mapItems[i];
            const shouldContinue = callback(value, originalKey, this);
            if (shouldContinue === false)
                break;
        }
    }
    get size() {
        return Object.keys(this.storage).length;
    }
    getPartialItems(part) {
        return Object.values(this.storage).map((item) => item[part]);
    }
    findItemInternalKey(key) {
        return (Object.entries(this.storage).find(([, item]) => {
            return (item.originalKey === key ||
                (Number.isNaN(item.originalKey) && Number.isNaN(key)));
        })?.[0] ?? null);
    }
    static createInternalKey() {
        return Math.random().toString(16).slice(2, 10);
    }
}
