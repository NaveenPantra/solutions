import { swapTwoElementIndexInArr } from "../utils/index.js";

function bubbleSort(arr = []) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) swapTwoElementIndexInArr(arr, i, j);
        }
    }
    return arr
}

export { bubbleSort }
