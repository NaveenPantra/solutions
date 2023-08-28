import {targetSum1, targetSum2} from './../../practice/multiplePointers/_000_targetSum.js'

test('targetSum1', () => {
    let arr = [-1, 1]
    let target = 0
    expect(targetSum1(arr, target)).toBeTruthy()

    arr = [-1, 1]
    target = 1
    expect(targetSum1(arr, target)).toBeFalsy()

    arr = [-2, 0, 1, 3]
    target = 1
    expect(targetSum1(arr, target)).toBeTruthy()

    arr = [3, -2, 0, 1]
    target = 0
    expect(targetSum1(arr, target)).toBeFalsy()

    arr = [3, 9, 8, 1 - 2, 0, 1]
    target = 2
    expect(targetSum1(arr, target)).toBeTruthy()
})

test('targetSum2', () => {
    let arr = [-1, 1]
    let target = 0
    expect(targetSum2(arr, target)).toBeTruthy()

    arr = [-1, 1]
    target = 1
    expect(targetSum2(arr, target)).toBeFalsy()

    arr = [-2, 0, 1, 3]
    target = 1
    expect(targetSum2(arr, target)).toBeTruthy()

    arr = [3, -2, 0, 1]
    target = 0
    expect(targetSum2(arr, target)).toBeFalsy()

    arr = [3, 9, 8, 1 - 2, 0, 1]
    target = 2
    expect(targetSum2(arr, target)).toBeTruthy()
})