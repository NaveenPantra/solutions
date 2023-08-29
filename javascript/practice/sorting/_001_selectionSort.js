import {swapTwoElementIndexInArr} from "../utils/index.js";

function selectionSort(arr = []) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) minIndex = j;
        }
        if (i !== minIndex) swapTwoElementIndexInArr(arr, i, minIndex)
    }
    return arr
}

export { selectionSort }
