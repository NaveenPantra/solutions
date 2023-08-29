function swapTwoElementIndexInArr(arr, ind1, ind2) {
    const temp = arr[ind2];
    arr[ind2] = arr[ind1];
    arr[ind1] = temp;
}

export { swapTwoElementIndexInArr }