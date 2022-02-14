/**
 * Находит абсолютную разницу в массивах
 * @param firstArray
 * @param secondArray
 * @param eliminateDuplicate
 */
export default function arrayDifference(firstArray, secondArray, eliminateDuplicate, valueGetter = (v) => v) {
    const merged = [].concat(firstArray, secondArray);
    const elementMap = new Map();
    let result = [];
    if (firstArray.length === 0 || secondArray.length === 0)
        return merged;
    for (const item of merged) {
        const itemValue = valueGetter(item);
        if (itemValue === Object(itemValue)) {
            throw new Error('[arrayDifference]: value getter return non-primitive');
        }
        if (elementMap.has(item)) {
            if (eliminateDuplicate) {
                elementMap.set(item, elementMap.get(item) + 1);
            }
            else
                elementMap.delete(item);
        }
        else
            elementMap.set(item, 1);
    }
    if (eliminateDuplicate) {
        elementMap.forEach((value, key) => {
            if (value === 1)
                result.push(key);
        });
    }
    else {
        if (merged.length === elementMap.size)
            return result;
        result = Array.from(elementMap.keys());
    }
    return result;
}
