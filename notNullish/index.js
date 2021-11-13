/**
 * Проверяет, равно ли значение логическому отсутствию (null, undefined, NaN)
 * @param value
 */
export function notNullish(value) {
    const nullishValues = [NaN, undefined, null];
    return !nullishValues.includes(value);
}
//# sourceMappingURL=index.js.map