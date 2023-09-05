import { sortedFrequency } from "../../practice/arrays/_002_sortedFrequency.js";

test('sortedFrequency', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    expect(sortedFrequency(arr, 2)).toBe(1);

    arr = [1, 2, 2, 2, 2, 6];
    expect(sortedFrequency(arr, 2)).toBe(4);

    arr = [1, 2, 2, 2, 2, 4];
    expect(sortedFrequency(arr, 4)).toBe(1);

    arr = [1, 2, 2, 2, 2, 4, 4];
    expect(sortedFrequency(arr, 4)).toBe(2);

    arr = [1, 1, 2, 2, 2, 2, 4, 4];
    expect(sortedFrequency(arr, 1)).toBe(2);
})
