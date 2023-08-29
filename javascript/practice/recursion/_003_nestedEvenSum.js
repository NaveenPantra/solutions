// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object
// which may contain nested objects.

function nestedEvenSum(obj) {
    if (typeof obj === "number") {
        if (obj % 2 === 0) return obj;
        else return 0;
    }
    if (!obj || typeof obj !== 'object') return 0;
    let sum = 0;
    for (let key in obj) {
        sum += nestedEvenSum(obj[key]);
    }
    return sum;
}

export {nestedEvenSum}
