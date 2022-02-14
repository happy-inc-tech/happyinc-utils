/**
 * Ищет пересекающиеся значения в N массивах
 * @param arrays
 */

export default function arrayIntersection<T = unknown>(
    ...arrays: ReadonlyArray<T>[]
): ReadonlyArray<T> {
    let arrayIndex = 0;
    let currentArray = arrays[arrayIndex];

    if (arrays.length === 1) return currentArray;
    if (!currentArray.length) return [];

    let index = 0;
    let indexMinifier = 0;
    const counter = new Map();
    const result: T[] = [];

    while (true) {
        let realIndex = index - indexMinifier;
        const item = currentArray[realIndex];
        const countData = (counter.get(item) ?? 0) + 1;
        counter.set(item, countData);
        if (countData === arrays.length) result.push(item);
        realIndex++;
        if (!Object.prototype.hasOwnProperty.call(currentArray, realIndex)) {
            arrayIndex++;
            indexMinifier += realIndex;
            if (!Object.prototype.hasOwnProperty.call(arrays, arrayIndex))
                break;
            currentArray = arrays[arrayIndex];
            if (!currentArray.length) return [];
        }
        index++;
    }

    return result;
}
