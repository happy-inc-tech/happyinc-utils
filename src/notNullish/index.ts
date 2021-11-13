/**
 * Проверяет, равно ли значение логическому отсутствию (null, undefined, NaN)
 * @param value
 */
export function notNullish(value: unknown): boolean {
    const nullishValues: unknown[] = [NaN, undefined, null];
    return !nullishValues.includes(value);
}
