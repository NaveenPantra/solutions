function quickSort(arr, start, end) {
    if (start < end) {
        const mid = partition(arr, start, end);
        quickSort(arr, start, mid - 1)
        quickSort(arr, mid + 1, end);
    }
    return arr
}

function partition(arr, start ,end) {
    let i = start - 1;
    for (let j = start; j < end; j++) {
        if (arr[j] <= arr[end]) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, end)
    return i + 1;
}

function swap(arr, ind1, ind2) {
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

export { quickSort }
