import { permutations } from "../../practice/strings/_000_permutations.js";

test('string permutations', () => {
    let str = 'ab'
    expect(permutations(str)).toStrictEqual(['ab', 'ba'])
    str = 'abc'
    expect(permutations(str)).toStrictEqual([ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ])
})