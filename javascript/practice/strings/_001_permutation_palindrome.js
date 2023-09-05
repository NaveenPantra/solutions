function permutationPalindrome(mainStr) {
    let flag = false;

    function permutations(str = '') {
        if (flag) return flag
        if (!str) return []
        if (str.length === 1) return [str]
        const permutationsList = []
        let i = 0;
        while (i < str.length) {
            const initialChar = str[i]
            const tempPerm = permutations(str.slice(0, i) + str.slice(i + 1))
            for (let perm of tempPerm) {
                let permStr = initialChar + perm
                if (str.length === mainStr.length && isPalindrome(permStr)) {
                    flag = true
                    return flag
                }
                permutationsList.push(permStr)
            }
            i++;
        }
        if (str.length === mainStr.length) return flag
        return permutationsList
    }


    function isPalindrome(str) {
        if (str.length === 1) return true
        let start = 0;
        let end = str.length - 1;
        while (start <= end) {
            if (str[start] !== str[end]) return false
            start += 1;
            end -= 1;
        }
        return true;
    }

    return permutations(mainStr);
}

export { permutationPalindrome }
