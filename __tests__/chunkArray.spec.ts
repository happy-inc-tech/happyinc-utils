import chunkArray from "../src/chunkArray";

const testArray1 = [1,2,3,4]
const testArray2 = [1,2,3]
const testArray3: number[] = []

describe('Chunk array', function () {
    test('Chunks array to specified size', () => {
        const result = chunkArray<number>(testArray1, 2)
        expect(result.length).toBe(2)
        expect(result[0].length).toBe(2)
        expect(result[1].length).toBe(2)
        expect(result[0].includes(1) && result[0].includes(2)).toBeTruthy()
        expect(result[1].includes(3) && result[1].includes(4)).toBeTruthy()
    })

    test('If it fails to split equally, the last array has fewer elements', () => {
        const [arr1, arr2] = chunkArray<number>(testArray2, 2)
        expect(arr1.length === 2 && arr2.length === 1).toBeTruthy()
        expect(arr1.includes(1) && arr1.includes(2)).toBeTruthy()
        expect(arr2.includes(3)).toBeTruthy()
    })

    test('If array is empty - it is ok', () => {
        expect(() => chunkArray(testArray3, 3)).not.toThrowError()
        const result = chunkArray(testArray3, 3)
        expect(result.length).toBe(0)
    })
});