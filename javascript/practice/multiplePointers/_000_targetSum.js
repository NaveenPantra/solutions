// O(n.long(n))
function targetSum1(arr = [], target = 0) {
    let start = 0;
    let end = arr.length - 1;
    arr.sort()
    while (start < end) {
        const sum = arr[start] + arr[end]
        if (sum === target) {
            return true;
        } else if (sum > target) {
            end -= 1;
        } else {
            start += 1;
        }
    }
    return false
}

// O(n)
function targetSum2(arr = [], target = 0) {
    const requiredNumMap = {}
    return arr.some((ele, ind) => {
        if (requiredNumMap[ele] >= 0) {
            return true
        }
        requiredNumMap[target - ele] = ind
        return false
    })

}

export {targetSum1, targetSum2}