function minSubArrayLength(arr = [], targetSum = 0) {
    let start = 0;
    let end = 0;
    let minSubArrayRange = [0, 0];
    let sum = 0;
    while (sum < targetSum && end < arr.length) {
        sum += arr[end];
        end += 1;
    }

    if (sum >= targetSum) {
        minSubArrayRange = [start, end];
    } else {
        return 0;
    }

    let countingSum = sum - arr[start];
    start += 1;
    while (end < arr.length) {
        if (countingSum < targetSum) {
            countingSum += arr[end]
            end += 1;
        }
        while (countingSum >= targetSum && start < end) {
            const currentRange = end - start;
            if (currentRange < (minSubArrayRange[1] - minSubArrayRange[0])) {
                minSubArrayRange = [start, end];
            }
            countingSum -= arr[start]
            start += 1
        }
    }

    return minSubArrayRange[1] - minSubArrayRange[0]
}

export {minSubArrayLength}