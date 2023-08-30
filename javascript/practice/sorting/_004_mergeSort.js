function merge(arr, start, mid, end) {
    let arr1 = new Array(mid - start + 1).fill(0);
    let arr2 = new Array(end - mid).fill(0);

    // fill arr1 from start..=mid
    let i = start;
    let j = 0;
    while (i <= mid) {
        arr1[j] = arr[i];
        i++;
        j++;
    }

    // fill arr2 from mid+1..=end
    i = mid + 1;
    j = 0;
    while (i <= end) {
        arr2[j] = arr[i];
        i++;
        j++;
    }

    // merge sorted arrays in to arr
    // Can we be simplified with-in one loop
    // but iteration-count will be same
    i = 0;
    j = 0;
    let k = start;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr[k] = arr1[i];
            i++;
            k++;
            continue;
        }
        arr[k] = arr2[j];
        j++;
        k++;
    }

    while (i < arr1.length) {
        arr[k] = arr1[i];
        i++;
        k++;
    }

    while (j < arr2.length) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
}

function mergeSort(arr, start, end) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
    return arr
}

export { mergeSort, merge }
