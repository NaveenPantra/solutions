function isSubsequence(str1, str2) {
    let str1Pointer = 0;
    let str2Pointer = 0;
    while (str2Pointer < str2.length) {
        if (str2[str2Pointer] === str1[str1Pointer]) {
            str1Pointer += 1;
            if (str1Pointer === str1.length) break
        }
        str2Pointer += 1;
    }
    return str1Pointer === str1.length
}

export {isSubsequence}