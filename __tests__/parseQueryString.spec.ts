import parseQueryString from '../src/parseQueryString';

const originalLocation: Location = window.location;

describe('Parse query string', function () {
    test('If no argument passed - use window.location.search', () => {
        delete (window as any).location;
        window.location = { search: '?test=parameter&value=123' } as any;
        const parsed = parseQueryString();
        expect(parsed.test).toBe('parameter');
        expect(parsed.value).toBe('123');
        window.location = originalLocation;
    });

    test('If argument is passed - use it', () => {
        const parsed = parseQueryString('?value=test');
        expect(parsed.value).toBe('test');
    });

    test('Correctly parses keys', () => {
        const parsed = parseQueryString('?key1=1&key2=2');
        const keys = Object.keys(parsed);
        expect(keys.includes('key1')).toBeTruthy();
        expect(keys.includes('key2')).toBeTruthy();
    });
});
