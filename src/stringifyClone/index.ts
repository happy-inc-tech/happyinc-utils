export default function stringifyClone<T = unknown>(jsonable: T): T {
    return JSON.parse(JSON.stringify(jsonable));
}
