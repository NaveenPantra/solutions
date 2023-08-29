function insertionSort(arr = []) {
    for (let i = 0; i < arr.length - 1; i++) {
        let j = i + 1;
        const key = arr[j];
        while (j > 0 && arr[j - 1] > key) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = key
    }
    return arr
}

export { insertionSort }