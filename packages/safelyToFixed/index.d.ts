/**
 * Безопасный toFixed, который не обвалит
 * фронтовое приложение в случае ошибки
 *
 * @param number
 * @param digits
 * @param addToEnd
 */
export default function safelyToFixed(number: unknown, digits: number, addToEnd?: string): string;
