import {sameFrequencyDigits} from './../../practice/frequencyCounter/_003_sameFrequencyDigitsInNumbers.js'

test('sameFrequencyDigits', () => {
    let num1 = 182
    let num2 = 281
    expect(sameFrequencyDigits(num1, num2)).toBeTruthy()

    num1 = 34
    num2 = 14
    expect(sameFrequencyDigits(num1, num2)).toBeFalsy()

    num1 = 3589578
    num2 = 5879385
    expect(sameFrequencyDigits(num1, num2)).toBeTruthy()

    num1 = 22
    num2 = 222
    expect(sameFrequencyDigits(num1, num2)).toBeFalsy()
})