import {isSubsequence} from './../../practice/multiplePointers/_002_isSubsequence.js'

test('isSubsequence', () => {
    let str1 = 'hello'
    let str2 = 'hello world'
    expect(isSubsequence(str1, str2)).toBeTruthy()

    str1 = 'sing'
    str2 = 'string'
    expect(isSubsequence(str1, str2)).toBeTruthy()

    str1 = 'abc'
    str2 = 'abracadabra'
    expect(isSubsequence(str1, str2)).toBeTruthy()

    str1 = 'abc'
    str2 = 'acb'
    expect(isSubsequence(str1, str2)).toBeFalsy()
})