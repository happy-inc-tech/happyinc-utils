/**
 * Ищет пересекающиеся значения в N массивах
 * @param arrs
 */

export default function multipleArrayIntersection(
    ...arrs: ReadonlyArray<unknown>[]
): ReadonlyArray<unknown> {
    if (!arrs.length) return [];
    let res = arrs[0].slice();
    for (let i = 1; i < arrs.length; i++) {
        res = intersectionOfTwo(res, arrs[i]) as unknown[];
    }
    return res;
}

function intersectionOfTwo(
    arr1: ReadonlyArray<unknown>,
    arr2: ReadonlyArray<unknown>
): ReadonlyArray<unknown> {
    return arr1.filter((v) => arr2.includes(v));
}
