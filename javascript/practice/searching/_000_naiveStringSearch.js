function naiveStringSearch(str = '', subStr = '') {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== subStr[0]) continue;
        let k = i + 1;
        let match = true;
        for (let j = 1; j < subStr.length && k < str.length; j++, k++) {
            if (str[k] !== subStr[j]) {
                match = false;
                break;
            }
        }
        if (match) counter++;
    }
    return counter;
}

export {naiveStringSearch}
