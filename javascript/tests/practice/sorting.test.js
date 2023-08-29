import { bubbleSort } from "../../practice/sorting/_000_bubbleSort.js";

const testEntries = [
    {
        arr: [9, 8, 0, 1],
        res: [0, 1, 8, 9],
    },
    {
        arr: [-1, 9, -3, 0, 1],
        res: [-3, -1, 0, 1, 9],
    },
]

test('bubbleSort', () => {
    global.structuredClone(testEntries).forEach(testEntry => {
        expect(bubbleSort(testEntry.arr)).toEqual(testEntry.res)
    })
})
