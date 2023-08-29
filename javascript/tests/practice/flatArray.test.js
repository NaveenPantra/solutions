import {flat} from './../../practice/recursion/_001_flat.js'

test('flat', () => {
    let arr = [1, 2, 3, [4, 5]]
    let res = [1, 2, 3, 4, 5]
    expect(flat(arr)).toEqual(res)

    arr = [1, [2, [3, 4], [[5]]]]
    res = [1, 2, 3, 4, 5]
    expect(flat(arr)).toEqual(res)

    arr = [[1], [2], [3]]
    res = [1, 2, 3]
    expect(flat(arr)).toEqual(res)

    arr = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]
    res = [1, 2, 3]
    expect(flat(arr)).toEqual(res)
})
