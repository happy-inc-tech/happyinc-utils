/**
 * Безопасный toFixed, который не обвалит
 * фронтовое приложение в случае ошибки
 *
 * @param number
 * @param digits
 * @param addToEnd
 */
export default function safelyToFixed(number, digits, addToEnd) {
    let returnData;
    if (isNaN(number) || typeof number !== 'number')
        return '-.-';
    try {
        returnData = number.toFixed(digits);
        returnData = number.toFixed(digits) + (addToEnd !== null && addToEnd !== void 0 ? addToEnd : '');
    }
    catch (e) {
        returnData = '-.-';
    }
    return returnData;
}
