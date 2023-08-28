import {areAnagrams} from './../../practice/frequencyCounter/_002_anagrams.js'

test('areAnagrams', () => {
    let str1 = 'iceman';
    let str2 = 'cinema';
    expect(areAnagrams(str1, str2)).toBeTruthy();

    str1 = 'icema';
    str2 = 'cinema';
    expect(areAnagrams(str1, str2)).toBeFalsy();

    str1 = 'idcema';
    str2 = 'cidema';
    expect(areAnagrams(str1, str2)).toBeTruthy();

    str1 = 'ice';
    str2 = 'cie';
    expect(areAnagrams(str1, str2)).toBeTruthy();

    str1 = 'icemad';
    str2 = 'cinema';
    expect(areAnagrams(str1, str2)).toBeFalsy();
})