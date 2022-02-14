import arrayIntersection from '../src/arrayIntersection';

const testObj = { a: 1 };
const testArr = [2];

describe('Array intersection', function () {
    test('Works correctly with primitives', () => {
        const inter = arrayIntersection([0, 1, 2], [3, 2, 4], [2, 5, 10]);
        expect(inter.length).toBe(1);
        expect(inter[0]).toBe(2);

        const inter2 = arrayIntersection(['s', 't', 1, false], ['t', true, 0]);
        expect(inter2.length).toBe(1);
        expect(inter2[0]).toBe('t');
    });

    test('Works correctly with objects', () => {
        let inter = arrayIntersection([testObj, testArr], [testObj, [2]]);
        expect(inter.length).toBe(1);
        expect((inter[0] as Record<string, number>)?.a).toBe(1);

        inter = arrayIntersection([testObj, testArr], [{ a: 1 }, testArr]);
        expect(inter.length).toBe(1);
        expect((inter[0] as number[])[0]).toBe(2);
    });

    test('Works correctly with nullish values', () => {
        let inter = arrayIntersection(
            [null, undefined, NaN],
            [NaN, null, undefined]
        );
        expect(inter.length).toBe(3);
    });

    test('Returns empty array if one of arguments empty', () => {
        expect(arrayIntersection([1, 2, 3], [3, 5], []).length).toBe(0);
    });

    test('Returns first array if one array passed', () => {
        console.log(arrayIntersection([1, 2, 3]));
        expect(arrayIntersection([1, 2, 3]).length).toBe(3);
    });
});
