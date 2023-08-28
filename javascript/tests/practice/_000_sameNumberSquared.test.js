import {sameNumberSquared} from './../../practice/frequencyCounter/_000_same.js'

test('sameNumberSquared', () => {
    let arr1 = [1, 2, 3, 4];
    let arr2 = [1, 4, 9, 16];
    expect(sameNumberSquared(arr1, arr2)).toBeTruthy()

    arr1 = [1, 2, -3, 4];
    arr2 = [1, 4, -9, 16];
    expect(sameNumberSquared(arr1, arr2)).toBeFalsy()

    arr1 = [1, 2, -3, 4];
    arr2 = [1, 4, 9, 16];
    expect(sameNumberSquared(arr1, arr2)).toBeTruthy()

    arr1 = [2, -3, 4, 3];
    arr2 = [4, 9, 16, 9];
    expect(sameNumberSquared(arr1, arr2)).toBeTruthy()

    arr1 = [2, -3, 4];
    arr2 = [4, 9, 16, 9];
    expect(sameNumberSquared(arr1, arr2)).toBeFalsy()

    arr1 = [2, -3, 4, 5];
    arr2 = [4, 9, 16, 9];
    expect(sameNumberSquared(arr1, arr2)).toBeFalsy()
})