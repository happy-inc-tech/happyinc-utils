/**
 * Устанавливает в ключ объекта object по пути path значение value
 * @param object
 * @param path
 * @param value
 */
export default function setPropertyByPath(object, path, value) {
    var _a;
    const pathSegments = path.split('.');
    let targetProp = object;
    for (let i = 0; i < pathSegments.length; i++) {
        const last = i === pathSegments.length - 1;
        if (!last) {
            if (typeof targetProp !== 'object')
                break;
            targetProp = (_a = targetProp) === null || _a === void 0 ? void 0 : _a[pathSegments[i]];
            if (!targetProp) {
                console.warn('[setPropertyByPath] path segment does not exist:', pathSegments[i]);
                break;
            }
        }
        else {
            if (typeof targetProp !== 'object') {
                console.warn('[setPropertyByPath] path segment does not exist:', pathSegments[i]);
                break;
            }
            const targetPropObj = targetProp;
            if (targetPropObj[pathSegments[i]]) {
                targetPropObj[pathSegments[i]] = value;
            }
            else {
            }
        }
    }
}
