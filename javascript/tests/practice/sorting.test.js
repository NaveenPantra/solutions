import { bubbleSort } from "../../practice/sorting/_000_bubbleSort.js";
import { selectionSort } from "../../practice/sorting/_001_selectionSort.js";
import {insertionSort} from "../../practice/sorting/_003_insertionSort.js";

const testEntries = [
    {
        arr: [9, 8, 0, 1],
        res: [0, 1, 8, 9],
    },
    {
        arr: [-1, 9, -3, 0, 1],
        res: [-3, -1, 0, 1, 9],
    },
    {
        arr: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        res: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
        arr: [-1, 0, 1],
        res: [-1, 0, 1],
    },
    {
        arr: [-1, 0, 1, -2],
        res: [-2, -1, 0, 1],
    },
    {
        arr: [5, 3, 4, 1, 2],
        res: [1, 2, 3, 4, 5],
    },
]

test('bubbleSort', () => {
    global.structuredClone(testEntries).forEach(testEntry => {
        expect(bubbleSort(testEntry.arr)).toEqual(testEntry.res)
    })
})

test('selectionSort', () => {
    global.structuredClone(testEntries).forEach(testEntry => {
        expect(selectionSort(testEntry.arr)).toEqual(testEntry.res)
    })
})

test('insertionSort', () => {
    global.structuredClone(testEntries).forEach(testEntry => {
        expect(insertionSort(testEntry.arr)).toEqual(testEntry.res)
    })
})
