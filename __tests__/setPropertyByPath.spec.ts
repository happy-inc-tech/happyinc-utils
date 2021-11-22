import setPropertyByPath from '../src/setPropertyByPath';

const testObj = {
    a: {
        b: {
            c: null,
            d: {
                value: 'test'
            },
            e: [
                {
                    value: 'array'
                }
            ]
        }
    }
};

describe('Set property by path', function () {
    test('Works correctly with objects', () => {
        setPropertyByPath(testObj, 'a.b.d.value', 'updated');
        expect(testObj.a.b.d.value).toBe('updated');
    });

    test('Works correctly with arrays', () => {
        setPropertyByPath(testObj, 'a.b.e.0.value', 'updateArray');
        expect(testObj.a.b.e[0].value).toBe('updateArray');
    });

    test('Does not throw error if prop not found', () => {
        expect(() => {
            setPropertyByPath(testObj, 'a.b.c.test', 'notexists');
        }).not.toThrowError();
        expect((testObj.a.b.c as any)?.test).toBeUndefined();
    });
});
