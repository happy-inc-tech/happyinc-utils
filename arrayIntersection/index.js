/**
 * Ищет пересекающиеся значения в N массивах
 * @param arrs
 */
export default function multipleArrayIntersection(...arrs) {
    if (!arrs.length)
        return [];
    let res = arrs[0].slice();
    for (let i = 1; i < arrs.length; i++) {
        res = intersectionOfTwo(res, arrs[i]);
    }
    return res;
}
function intersectionOfTwo(arr1, arr2) {
    return arr1.filter((v) => arr2.includes(v));
}
//# sourceMappingURL=index.js.map