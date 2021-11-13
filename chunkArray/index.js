/**
 * Разбивает массив на N массивов по "size" элементов в каждом
 * @param arr
 * @param size
 */
export default function chunkArray(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) => arr.slice(i * size, i * size + size));
}
//# sourceMappingURL=index.js.map