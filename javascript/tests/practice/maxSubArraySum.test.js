import {maxSubArraySumFixedWindow} from './../../practice/slidingWindow/_001_maxSubArraySum.js'

test('maxSubArraySumFixedWindow', () => {
    let arr = [1, 2, 5, 2, 8, 1, 5]
    expect(maxSubArraySumFixedWindow(arr, 2)).toEqual(10)

    arr = [1, 2, 5, 2, 8, 1, 5]
    expect(maxSubArraySumFixedWindow(arr, 4)).toEqual(17)

    arr = [4, 2, 1, 6]
    expect(maxSubArraySumFixedWindow(arr, 1)).toEqual(6)

    arr = [4, 2, 1, 6, 2]
    expect(maxSubArraySumFixedWindow(arr, 4)).toEqual(13)

    arr = []
    expect(maxSubArraySumFixedWindow(arr, 4)).toEqual(0)

    arr = [1]
    expect(maxSubArraySumFixedWindow(arr, 1)).toEqual(1)

    arr = [1, 2, 3, 4]
    expect(maxSubArraySumFixedWindow(arr, 4)).toEqual(10)

})