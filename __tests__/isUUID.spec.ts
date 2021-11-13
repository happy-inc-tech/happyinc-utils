import isUUID from '../src/isUUID';

describe('Is UUID', function () {
    test('Works correctly', () => {
        const uuid = '7a32d0fa-05b0-4a7b-9fbf-6336d1bfe2e3';
        expect(isUUID(uuid)).toBeTruthy();
        expect(isUUID('test-string')).toBeFalsy();
        expect(isUUID('950b9133-9d7b-4364-a3f4-9ea00a3ccac55')).toBeFalsy();
    });
});
