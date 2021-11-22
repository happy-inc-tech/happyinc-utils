/**
 * Создать глубокий клон сериализуемого объекта или массива
 * @param jsonable
 */
export default function stringifyClone(jsonable) {
    return JSON.parse(JSON.stringify(jsonable));
}
