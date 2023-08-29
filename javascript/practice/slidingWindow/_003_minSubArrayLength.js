function minSubArrayLength(arr = [], targetSum = 0) {
    let start = 0;
    let end = 0;
    let minSubArrayRange = Infinity;

    let countingSum = 0;
    while (end < arr.length) {
        if (countingSum < targetSum) {
            countingSum += arr[end]
            end += 1;
        }
        while (countingSum >= targetSum && start < end) {
            const currentRange = end - start;
            if (currentRange < minSubArrayRange) {
                minSubArrayRange = currentRange;
            }
            countingSum -= arr[start]
            start += 1
        }
    }

    return minSubArrayRange === Infinity ? 0 : minSubArrayRange;
}

export {minSubArrayLength}
