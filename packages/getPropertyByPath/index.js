/**
 * Получает значение ключа объекта object по пути path
 * @param object
 * @param path
 */
export default function getPropertyByPath(object, path) {
    if (/[\[|\]]/gm.test(path))
        throw new Error('[getPropertyByPath] only dot separator in path supported');
    const pathSegments = path.split('.');
    let pathIdx = 0;
    let returnData = object;
    while (pathIdx < pathSegments.length) {
        const nextSegment = pathSegments[pathIdx];
        if (returnData[nextSegment] || returnData[Number(nextSegment)]) {
            returnData = Array.isArray(returnData)
                ? returnData[Number(nextSegment)]
                : returnData[nextSegment];
            pathIdx++;
        }
        else {
            return undefined;
        }
    }
    return returnData;
}
