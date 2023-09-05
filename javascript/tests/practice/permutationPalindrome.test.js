import {permutationPalindrome} from "../../practice/strings/_001_permutation_palindrome.js";

test('permurationPalindrome', () => {
    expect(permutationPalindrome('aba')).toBeTruthy()
    expect(permutationPalindrome('abaa')).toBeFalsy()
    expect(permutationPalindrome('aab')).toBeTruthy()
    expect(permutationPalindrome('baaaa')).toBeTruthy()
    expect(permutationPalindrome('aaaa')).toBeTruthy()
    expect(permutationPalindrome('aaaab')).toBeTruthy()
    expect(permutationPalindrome('ab')).toBeFalsy()
    expect(permutationPalindrome('abcab')).toBeTruthy()
    expect(permutationPalindrome('taco coa')).toBeFalsy()
    expect(permutationPalindrome('taco  coa')).toBeTruthy()
    expect(permutationPalindrome('tacocoa')).toBeTruthy()
})
