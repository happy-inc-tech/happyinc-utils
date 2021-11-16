import downloadFileFromBlob from '../src/downloadFileFromBlob';

describe('Download file from blob', function () {
    it('Works correctly', () => {
        const urls = new Map();
        window.URL.createObjectURL = jest
            .fn()
            .mockImplementation((blob: Blob) => {
                const url = Date.now().toString();
                urls.set(url, blob);
                return url;
            });
        window.URL.revokeObjectURL = jest
            .fn()
            .mockImplementation((url: string) => {
                if (!urls.has(url)) throw new Error();
                urls.delete(url);
            });
        expect(() => {
            downloadFileFromBlob(new Blob(['hello']));
        }).not.toThrowError();
        expect(urls.size).toBe(0);
    });
});
