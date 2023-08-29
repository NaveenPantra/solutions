function flat(arr) {
    if (!Array.isArray(arr)) return arr
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flat(arr[i]))
        } else {
            result = result.concat(arr[i])
        }
    }
    return result
}

export {flat}
