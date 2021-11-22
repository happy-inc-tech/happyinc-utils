import stringifyClone from '../src/stringifyClone';

const obj: any = {
    key1: 'test',
    key2: [
        {
            value: 'nested'
        }
    ]
};

describe('Stringify clone', function () {
    test('Works correctly', () => {
        const copy = stringifyClone<any>(obj);
        expect(obj === copy).toBeFalsy();
        expect(copy.key1).toBe('test');
        expect(copy.key2[0].value).toBe('nested');
    });
});
