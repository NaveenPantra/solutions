import {longestUniqueCharactersSubString} from './../../practice/slidingWindow/_000_longestUniquerCharsSubStr.js'

test('longestUniqueCharactersSubString', () => {
    let str = 'hellothere'
    let longestSubStrRange = longestUniqueCharactersSubString(str)
    expect(str.slice(longestSubStrRange[0], longestSubStrRange[1])).toEqual('lother')

    str = 'hel'
    longestSubStrRange = longestUniqueCharactersSubString(str)
    expect(str.slice(longestSubStrRange[0], longestSubStrRange[1])).toEqual('hel')

    str = ''
    longestSubStrRange = longestUniqueCharactersSubString(str)
    expect(str.slice(longestSubStrRange[0], longestSubStrRange[1])).toEqual('')

    str = 'hehehehehe'
    longestSubStrRange = longestUniqueCharactersSubString(str)
    expect(str.slice(longestSubStrRange[0], longestSubStrRange[1])).toEqual('he')
})