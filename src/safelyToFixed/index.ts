/**
 * Безопасный toFixed, который не обвалит
 * фронтовое приложение в случае ошибки
 *
 * @param number
 * @param digits
 * @param addToEnd
 */
export default function safelyToFixed(
    number: unknown,
    digits: number,
    addToEnd?: string
): string {
    let returnData;
    if (isNaN(<number>number) || typeof number !== 'number') return '-.-';
    try {
        returnData = number.toFixed(digits);
        returnData = number.toFixed(digits) + (addToEnd ?? '');
    } catch (e) {
        returnData = '-.-';
    }
    return returnData;
}
