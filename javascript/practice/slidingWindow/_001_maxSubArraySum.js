function maxSubArraySumFixedWindow(arr = [], window = 0) {
    let start = 0;
    let end = 0;
    let largestSum = 0
    while (end < window && end < arr.length) {
        largestSum += arr[end];
        end += 1;
    }

    let countingSum = largestSum
    while (end < arr.length) {
        countingSum += arr[end]
        countingSum -= arr[start]
        if (countingSum > largestSum) largestSum = countingSum
        end += 1
        start += 1
    }

    return largestSum
}

export {maxSubArraySumFixedWindow}