function sortedFrequency(arr, target) {
    let startIndex = Infinity;
    let endIndex = -Infinity;
    function recurse(start, end) {
        if (start > end) return
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            if (mid > endIndex) {
                endIndex = mid
            }
            if (mid < startIndex) {
                startIndex = mid
            }
            recurse(start, mid - 1)
            recurse(mid + 1, end)
        } else if (arr[mid] > target) {
            recurse(start, mid - 1)
        } else {
            recurse(mid + 1, end)
        }
    }

    recurse(0, arr.length - 1);
    if (startIndex === Infinity || endIndex === -Infinity) return 0
    return endIndex - startIndex + 1;

}

export { sortedFrequency }
