import parseJwt from '../src/parseJwt';

const VALID_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWx1ZSI6NDJ9.W8JXpGLOempbaX02d2b2EWYfiLlmhMqpvkYJT9oRhvg';
const INVALID_TOKEN =
    ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eaaayJ2YWx1ZSI6NDJ9.W8JXpGLOempbaX02d2b2EWYfiLlmhMqpvkYJT9oRhvg';

describe('Parse JWT token', function () {
    test('Parses valid token', () => {
        const parsed = parseJwt(VALID_TOKEN);
        expect(parsed.value).toBe(42);
    });

    test('Does not throw an error on invalid token', () => {
        expect(() => parseJwt(INVALID_TOKEN)).not.toThrowError();
    });

    test('Result of invalid token parsing is an empty object literal', () => {
        const result = parseJwt(INVALID_TOKEN);
        expect(Object.prototype.toString.call(result)).toBe('[object Object]');
        expect(Object.keys(result).length).toBe(0);
    });
});
