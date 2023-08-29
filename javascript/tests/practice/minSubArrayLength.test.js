import {minSubArrayLength} from './../../practice/slidingWindow/_003_minSubArrayLength.js'

test('minSubArrayLength', () => {
    let arr = [2, 3, 1, 2, 4, 3]
    let targetSum = 7
    expect(minSubArrayLength(arr, targetSum)).toEqual(2)

    arr = [2, 1, 6, 5, 4]
    targetSum = 9
    expect(minSubArrayLength(arr, targetSum)).toEqual(2)

    arr = [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19]
    targetSum = 52
    expect(minSubArrayLength(arr, targetSum)).toEqual(1)

    arr = [1, 4, 16, 22, 5, 7, 8, 9, 10]
    targetSum = 39
    expect(minSubArrayLength(arr, targetSum)).toEqual(3)

    arr = [1, 4, 16, 22, 5, 7, 8, 9, 10]
    targetSum = 55
    expect(minSubArrayLength(arr, targetSum)).toEqual(5)

    arr = [4, 3, 3, 8, 1, 2, 3]
    targetSum = 11
    expect(minSubArrayLength(arr, targetSum)).toEqual(2)

    arr = [1, 4, 16, 22, 5, 7, 8, 9, 10]
    targetSum = 95
    expect(minSubArrayLength(arr, targetSum)).toEqual(0)
})
