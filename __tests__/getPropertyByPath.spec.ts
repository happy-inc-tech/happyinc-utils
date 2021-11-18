import getPropertyByPath from '../src/getPropertyByPath';

const testSet1: Record<string, any> = {
    a: {
        b: 3,
        c: {
            d: {
                e: 5
            },
            f: 0
        }
    }
};

const testSet2: Record<string, any> = {
    a: {
        b: [
            {
                c: 3
            },
            {
                d: 4
            }
        ],
        e: 5
    }
};

describe('Get property by path', function () {
    test('Works correctly with object paths', () => {
        expect(getPropertyByPath(testSet1, 'a.c.d.e')).toBe(5);
        expect(getPropertyByPath(testSet1, 'a.b')).toBe(3);
    });

    test('Works correctly with arrays', () => {
        expect(getPropertyByPath(testSet2, 'a.b.0.c')).toBe(3);
        expect(getPropertyByPath(testSet2, 'a.b.1.d')).toBe(4);
    });

    test('If nothing found - return undefined', () => {
        let result: any = null;
        expect(
            () => (result = getPropertyByPath(testSet1, 'a.b.c.d.e.f'))
        ).not.toThrowError();
        expect(result).toBeUndefined();
    });
});
