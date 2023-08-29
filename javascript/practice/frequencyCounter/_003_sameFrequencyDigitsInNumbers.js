function sameFrequencyDigits(num1, num2) {
    const num2DigitsMap = {}
    while (num2 > 0) {
        const lastDigit = num2 % 10;
        num2 = Math.floor(num2 / 10);
        num2DigitsMap[lastDigit] ? num2DigitsMap[lastDigit] += 1 : num2DigitsMap[lastDigit] = 1;
    }

    while (num1 > 0) {
        const lastDigit = num1 % 10;
        if (!num2DigitsMap[lastDigit]) {
            return false;
        }
        num2DigitsMap[lastDigit] -= 1;
        num1 = Math.floor(num1 / 10);
        if (num2DigitsMap[lastDigit] === 0) {
            delete num2DigitsMap[lastDigit]
        }
    }

    return Object.keys(num2DigitsMap).length === 0;
}

export {sameFrequencyDigits}