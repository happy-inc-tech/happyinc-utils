import arrayDifference from "../src/arrayDifference";

const testCase1 = [[0], [1, 2, 3, 4, 5]]
const testCase2 = [[3, 1, 1, 0, 5, 8], [1, 2, 5, 4, 8, 12]]
const testCase3 = [['a', 'b', 'c', 'd', 'h', 'e'], ['c', 'd', 'e', 'f', 'g'],]
const testCase4 = [[0, 1, 2, 3, 4],[]]
const testCase5 = [[{ a: '1'}, {b: '2'}],[{b: '3'}]]

describe('array Difference', function () {
    function compareNumbers(a:any, b:any) {
        return a - b;
    }
    test('Check differenceArray', () => {
        const [arr1, arr2] = testCase1
        const result = arrayDifference(arr1, arr2)
        expect(result).toEqual([])
    })

    test('With duplicate elements', () => {
        const [arr1, arr2] = testCase2
        let result = arrayDifference(arr1, arr2)
        result.sort(compareNumbers)
        expect(result).toEqual([0, 1, 2, 3, 4, 12])
    })

    test('Delete duplicate elements', () => {
        const [arr1, arr2] = testCase2
        let result = arrayDifference(arr1, arr2, true)
        result.sort(compareNumbers)
        expect(result).toEqual([0, 2, 3, 4, 12])
    })

    test('Check string primitive', () => {
        const [arr1, arr2] = testCase3
        let result = arrayDifference(arr1, arr2)
        result.sort(compareNumbers)
        expect(result).toEqual(['a', 'b', 'h', 'f', 'g'])
    })

    test('If array is empty - it is ok', () => {
        const [arr1, arr2] = testCase4
        expect(() => arrayDifference(arr1,arr2)).not.toThrowError()
        const result = arrayDifference(arr1,arr2)
        expect(result.length).toBe(0)
    })

    test('If array is has non-primitive', () => {
        const [arr1, arr2] = testCase5
        expect(() => arrayDifference(arr1,arr2)).toThrowError()
    })
})
