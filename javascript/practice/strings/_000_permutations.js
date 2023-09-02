/**
 *
 * @param str
 * @returns {[string]}
 */
function permutations(str = '') {
    if (!str) return []
    if (str.length === 1) return [str]
    let permutationsList = []
    let i = 0;
    while (i < str.length) {
        const initialChar = str[i]
        const tempPerm = permutations(str.slice(0, i) + str.slice(i + 1))
        for (let perm of tempPerm) {
            permutationsList.push(initialChar + perm)
        }
        i++;
    }
    return permutationsList
}

export { permutations }

let str = 'abc'
console.log(permutations(str))