function mergeSortedArrays(arr1, arr2) {
    const sortedArray = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            sortedArray.push(arr1[i]);
            i += 1;
            continue;
        }
        sortedArray.push(arr2[j]);
        j += 1;
    }
    while (i < arr1.length) {
        sortedArray.push(arr1[i])
        i += 1;
    }
    while (j < arr2.length) {
        sortedArray.push(arr2[j])
        j += 1;
    }
    return sortedArray
}

export { mergeSortedArrays }
