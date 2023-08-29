function isPalindrome(str = '', start = 0, end = 0) {
    if (start >= end) return true;
    if (str[start] !== str[end]) return false;
    return str[start] === str[end] && isPalindrome(str, start + 1, end - 1);
}

export {isPalindrome}
