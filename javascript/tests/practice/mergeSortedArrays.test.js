import { mergeSortedArrays } from "../../practice/arrays/_000_mergeSortedArrays.js";

test('mergeSortedArrays', () => {
    let arr1 = [-1, 9, 10];
    let arr2 = [-10, -9, -8, 3];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([-10, -9, -8, -1, 3, 9, 10]);

    arr1 = [0];
    arr2 = [-10, -9, -8, 3];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([-10, -9, -8, 0, 3]);

    arr1 = [];
    arr2 = [-10, -9, -8, 3];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([-10, -9, -8, 3]);

    arr1 = [-10, -9, -8, 3];
    arr2 = [];
    expect(mergeSortedArrays(arr1, arr2)).toEqual([-10, -9, -8, 3]);
})