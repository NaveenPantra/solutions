function longestUniqueCharactersSubString(str = '') {
    let longestRange = null
    let startRange = 0
    let endRange = 0;
    let charsSetInWindow = {}
    while (endRange < str.length) {
        if (charsSetInWindow[str[endRange]] >= 0) {
            const currentRange = endRange - startRange
            if (!longestRange || currentRange > longestRange[1] - longestRange[0]) {
                longestRange = [startRange, endRange]
            }
            charsSetInWindow = {}
            startRange = endRange;
        }
        charsSetInWindow[str[endRange]] = endRange
        endRange += 1;
    }
    if (!longestRange) {
        return [startRange, endRange]
    }
    return longestRange
}


export {longestUniqueCharactersSubString}