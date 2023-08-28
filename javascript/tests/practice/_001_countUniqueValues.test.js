import {countUniqueValues1, countUniqueValues2} from './../../practice/multiplePointers/_001_countUniqueValues.js'

test('countUniqueValues1', () => {
    let arr = [1, 1, 1, 1, 2];
    expect(countUniqueValues1(arr)).toBe(2);

    arr = [1, 1, 1, 1, 2, 2, 4, 5, 6, 6, 7, 7];
    expect(countUniqueValues1(arr)).toBe(6);

    arr = [1];
    expect(countUniqueValues1(arr)).toBe(1);

    arr = [];
    expect(countUniqueValues1(arr)).toBe(0);
})


test('countUniqueValues2', () => {
    let arr = [1, 1, 1, 1, 2];
    expect(countUniqueValues2(arr)).toBe(2);

    arr = [1, 1, 1, 1, 2, 2, 4, 5, 6, 6, 7, 7];
    expect(countUniqueValues2(arr)).toBe(6);

    arr = [1];
    expect(countUniqueValues2(arr)).toBe(1);

    arr = [];
    expect(countUniqueValues2(arr)).toBe(0);
})