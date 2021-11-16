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
        var _a, _b;
        const internalKey = this.findItemInternalKey(key);
        return internalKey ? (_b = (_a = this.storage[internalKey]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null : null;
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
        var _a, _b;
        return ((_b = (_a = Object.entries(this.storage).find(([, item]) => {
            return (item.originalKey === key ||
                (Number.isNaN(item.originalKey) && Number.isNaN(key)));
        })) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null);
    }
    static createInternalKey() {
        return Math.random().toString(16).slice(2, 10);
    }
}
