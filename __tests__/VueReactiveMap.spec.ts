import VueReactiveMap, { InitialMapValue } from '../src/VueReactiveMap';

const objValueKey: Record<string, string> = { a: 'test' };
const arrValueKey: ReadonlyArray<string> = ['test'];
const valueTypeTest: InitialMapValue = [
    [null, '0'],
    [undefined, '1'],
    [NaN, '3'],
    [objValueKey, '4'],
    [arrValueKey, '5']
];

describe('Vue Reactive Map', function () {
    test('Accepts constructor parameters', () => {
        const map = new VueReactiveMap([['test', 'str']]);
        expect(map.size).toBe(1);
        expect(map.has('test')).toBeTruthy();
        expect(map.get('test')).toBe('str');
    });

    test('Any type can be a key', () => {
        expect(() => new VueReactiveMap(valueTypeTest)).not.toThrowError();
        const map = new VueReactiveMap(valueTypeTest);
        expect(map.size).toBe(valueTypeTest.length);
        valueTypeTest.forEach(([key, value]) => {
            expect(map.get(key)).toBe(value);
        });
    });

    test('Any type can be a key and changes value correctly', () => {
        const map = new VueReactiveMap(valueTypeTest);
        const initialSize = map.size;
        valueTypeTest.forEach(([key, value]) => {
            map.set(key, value + '_new');
            expect(map.get(key)).toBe(value + '_new');
        });
        expect(map.size).toBe(initialSize);
        const localObjKey = JSON.parse(JSON.stringify(objValueKey));
        const localArrKey = JSON.parse(JSON.stringify(arrValueKey));
        expect(map.get(localObjKey)).toBe(null);
        expect(map.get(localArrKey)).toBe(null);
        map.set(localObjKey, '6');
        map.set(localArrKey, '7');
        expect(map.get(localObjKey)).toBe('6');
        expect(map.get(localArrKey)).toBe('7');
    });

    test('Delete works correctly', () => {
        const map = new VueReactiveMap(valueTypeTest);
        const initialSize = map.size;
        map.delete(NaN);
        expect(map.size).toBeLessThan(initialSize);
        expect(map.get(NaN)).toBe(null);
    });

    test('Set method returns instance', () => {
        const map = new VueReactiveMap();
        const set = map.set(1, 'test');
        expect(set).toBeInstanceOf(VueReactiveMap);
        expect(set.size).toBe(1);
    });

    test('forEach iterates full map', () => {
        const map = new VueReactiveMap(valueTypeTest);
        map.forEach((value, key, map1) => {
            const targetInitial = valueTypeTest.find(
                (entry) =>
                    entry[0] === key ||
                    (Number.isNaN(entry[0]) && Number.isNaN(key))
            );
            const [initKey, initVal] = targetInitial as [unknown, unknown];
            expect(value).toBe(initVal);
            expect(key).toBe(initKey);
            expect(map1).toBeInstanceOf(VueReactiveMap);
            expect(map1).toEqual(map);
        });
    });

    test('Return false from callback interrupts iteration', () => {
        const map = new VueReactiveMap(valueTypeTest);
        let count = 0;
        map.forEach((value) => {
            if (value === '3') return false;
            count++;
        });
        expect(count).toBeLessThan(valueTypeTest.length);
    });

    test('Keys, Values and Entries methods return correct values', () => {
        const map = new VueReactiveMap(valueTypeTest);
        const keys = map.keys();
        const values = map.values();
        const entries = map.entries();
        valueTypeTest.forEach(([key, value]) => {
            expect(keys.includes(key)).toBeTruthy();
            expect(values.includes(value)).toBeTruthy();
            expect(
                entries.find(
                    (entry) =>
                        keys.includes(entry[0]) && values.includes(entry[1])
                )
            ).toBeDefined();
        });
    });

    test('Clear method works fine', () => {
        const map = new VueReactiveMap(valueTypeTest);
        map.clear();
        expect(map.size).toBe(0);
        expect(map.get(null)).toBe(null);
    });
});
