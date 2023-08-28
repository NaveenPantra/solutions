// O(n.log(n))
function sameNumberSquared(arr1 = [], arr2 = []) {
    if (arr1.length !== arr2.length) return false
    const hashMap = {}
    arr2.forEach(ele => {
        if (hashMap[ele]) {
            hashMap[ele] += 1
            return
        }
        hashMap[ele] = 1
    })
    return arr1.every(ele => {
        const sqEle = Math.pow(ele, 2);
        if (!hashMap[sqEle]) {
            return false
        }
        hashMap[sqEle] -= 1
        return true
    })
}

export {
    sameNumberSquared,
}