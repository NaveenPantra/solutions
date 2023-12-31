function areAnagrams(str1 = '', str2 = '') {
    if (str1.length !== str2.length) return false

    const str2CharsCounterMap = {}
    for (let char of str2) {
        str2CharsCounterMap[char] = str2CharsCounterMap[char] + 1 || 1
    }
    for (let char of str1) {
        if (!str2CharsCounterMap[char]) return false
        str2CharsCounterMap[char] -= 1
    }
    return true
}

export {areAnagrams}