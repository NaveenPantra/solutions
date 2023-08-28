// O(n.log(n))
function countUniqueValues1(arr = []) {
    let back = -1
    let forward = 0
    let counter = 0;
    arr.sort()
    while (forward < arr.length) {
        if (arr[back] !== arr[forward]) counter++;
        back = forward;
        forward += 1;
    }
    return counter;
}

// O(n)
function countUniqueValues2(arr = []) {
    let seenNumbersSet = new Set()
    for (let i = 0; i < arr.length; i++) {
        seenNumbersSet.add(arr[i]);
    }
    return seenNumbersSet.size
}

export {
    countUniqueValues1, countUniqueValues2
}