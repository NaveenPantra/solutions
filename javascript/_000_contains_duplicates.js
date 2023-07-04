function containsDuplicatesCaller() {
    const arr = [1, 2, 3, 4, 5, 6, 5, -1, 2, -1, 0];
    // const containsDuplicateNumbers = containsDuplicateV1(arr);
    const containsDuplicateNumbers = containsDuplicateV2(arr);
    console.log(`${arr} contains duplicates? ${containsDuplicateNumbers}`);
}


// Bruteforce
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicateV1(nums) {
    const seenNums = {};

    for (let num of nums) {
        if (seenNums[num]) return true;
        seenNums[num] = true;
    }
    return false;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicateV2(nums) {
    nums = nums.sort();

    let prevNum = null
    for (let num of nums) {
        if (prevNum === num) return true;
        prevNum = num;
    }
    return false;
}

export default containsDuplicatesCaller