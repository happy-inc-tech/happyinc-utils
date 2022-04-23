/**
 * Группировка массива в объект по определённому
 * строковому признаку
 *
 * @param target
 * @param groupByGetter
 */
export default function arrayGroupBy(target, groupByGetter) {
    if (!target.length)
        return {};
    const result = {};
    for (const element of target) {
        const key = groupByGetter(element);
        if (typeof key !== 'string')
            throw new TypeError('[arrayGroupBy] groupByGetter should return string');
        if (!(key in result))
            result[key] = [];
        result[key].push(element);
    }
    return result;
}
