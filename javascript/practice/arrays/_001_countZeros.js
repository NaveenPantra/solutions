/**
 * Given an array of 1s and 0s which has all 1s first
 * followed by all 0s, write a function called countZeroes,
 * which returns the number of zeroes in the array.
 *
 * @param arr {[number]}
 * @returns {number}
 */
function countZeros(arr = []) {
    if (arr[0] === 0) return arr.length;

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === 1 && arr[mid + 1] === 0) return arr.length - mid - 1;
        else if (arr[mid] === 1) start = mid + 1;
        else end = mid - 1;
    }
    return 0
}

export {countZeros}