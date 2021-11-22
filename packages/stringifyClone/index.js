export default function stringifyClone(jsonable) {
    return JSON.parse(JSON.stringify(jsonable));
}
