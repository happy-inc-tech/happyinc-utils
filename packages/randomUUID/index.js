/**
 * Создать случайный UUID, кроссбраузерно
 */
export default function randomUUID() {
    if (isNode()) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        return require('crypto').randomUUID();
    }
    if (allowUseWindowCrypto()) {
        if (typeof window.crypto.randomUUID === 'function') {
            return window.crypto.randomUUID();
        }
        // @ts-ignore
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^
            (window.crypto.getRandomValues(new Uint8Array(1))[0] &
                (15 >> (c / 4)))).toString(16));
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
const isNode = () => typeof process === 'object' && typeof require === 'function';
const allowUseWindowCrypto = () => window &&
    window.crypto &&
    (typeof window.crypto.randomUUID === 'function' ||
        typeof window.crypto.getRandomValues === 'function');
