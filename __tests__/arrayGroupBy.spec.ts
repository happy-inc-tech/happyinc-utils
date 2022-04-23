import arrayGroupBy from '../src/arrayGroupBy';

const testArr = [
    {
        id: '1',
        value: 1,
        parent: 's'
    },
    {
        id: '2',
        value: 2,
        parent: 'd'
    },
    {
        id: '3',
        value: 3,
        parent: 'd'
    }
];

describe('Array group by', function () {
    test('Groups correctly', function () {
        const result = arrayGroupBy(testArr, (el) => el.parent);
        expect(result.s.length).toBe(1);
        expect(result.d.length).toBe(2);
    });

    test('If key getter doesnt return string - throw an error', () => {
        // @ts-ignore
        expect(() => arrayGroupBy(testArr, (el) => el.value)).toThrowError();
    });

    test('Does not crash on empty array', () => {
        let result: any;
        expect(() => {
            // @ts-ignore
            result = arrayGroupBy([], (el) => el.id);
        }).not.toThrowError();
        expect(Object.keys(result).length).toBe(0);
    });
});
