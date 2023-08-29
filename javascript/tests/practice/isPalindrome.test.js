import {isPalindrome} from './../../practice/recursion/_000_isPalindrome.js'

test('isPalindrome', () => {
    let str = 'abba'
    expect(isPalindrome(str, 0, str.length - 1)).toBeTruthy()

    str = 'aba'
    expect(isPalindrome(str, 0, str.length - 1)).toBeTruthy()

    str = 'abaa'
    expect(isPalindrome(str, 0, str.length - 1)).toBeFalsy()

    str = 'tacocat'
    expect(isPalindrome(str, 0, str.length - 1)).toBeTruthy()
})
