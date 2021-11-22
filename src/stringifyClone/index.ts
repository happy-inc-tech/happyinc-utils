/**
 * Создать глубокий клон сериализуемого объекта или массива
 * @param jsonable
 */
export default function stringifyClone<T = unknown>(jsonable: T): T {
    return JSON.parse(JSON.stringify(jsonable));
}
