function rookieStringCompression(str) {
    let compressedStr = ''
    if (!str) return str
    let curChar = str[0];
    let curCharCount = 1;
    compressedStr += curChar
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== curChar) {
            curChar = str[i]
            compressedStr += curCharCount + curChar
            curCharCount = 0;
        }
        curCharCount += 1;
    }
    compressedStr += curCharCount
    return compressedStr
}

export { rookieStringCompression }
