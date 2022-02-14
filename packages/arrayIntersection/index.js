/**
 * Ищет пересекающиеся значения в N массивах
 * @param arrays
 */
export default function arrayIntersection(...arrays) {
    var _a;
    let arrayIndex = 0;
    let currentArray = arrays[arrayIndex];
    if (arrays.length === 1)
        return currentArray;
    if (!currentArray.length)
        return [];
    let index = 0;
    let indexMinifier = 0;
    const counter = new Map();
    const result = [];
    while (true) {
        let realIndex = index - indexMinifier;
        const item = currentArray[realIndex];
        const countData = ((_a = counter.get(item)) !== null && _a !== void 0 ? _a : 0) + 1;
        counter.set(item, countData);
        if (countData === arrays.length)
            result.push(item);
        realIndex++;
        if (!Object.prototype.hasOwnProperty.call(currentArray, realIndex)) {
            arrayIndex++;
            indexMinifier += realIndex;
            if (!Object.prototype.hasOwnProperty.call(arrays, arrayIndex))
                break;
            currentArray = arrays[arrayIndex];
            if (!currentArray.length)
                return [];
        }
        index++;
    }
    return result;
}
