/**
 * Парсинг JWT в браузере и в Node.js
 * @param token
 */
export default function parseJwt(token: string): Record<string, unknown> {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const b64DecodeMethod =
        'document' in globalThis
            ? globalThis.atob
            : (data: string): string =>
                  globalThis.Buffer.from(data, 'base64').toString('utf8');
    try {
        const jsonString = decodeURIComponent(
            b64DecodeMethod(base64)
                .split('')
                .map(function (c) {
                    return (
                        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
                    );
                })
                .join('')
        );
        return JSON.parse(jsonString);
    } catch (e) {
        console.error('[parseJwt error]', e, 'Object literal is returned');
        return {};
    }
}
