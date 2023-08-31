import { countZeros } from "../../practice/arrays/_001_countZeros.js";

test('countZeros', () => {
    expect(countZeros([0,0,0])).toEqual(3)
    expect(countZeros([1,1,1,1])).toEqual(0)
    expect(countZeros([1,0,0,0,0])).toEqual(4)
    expect(countZeros([1,1,1,1,0,])).toEqual(1)
    expect(countZeros([1,1,1,1,0,0])).toEqual(2)
    expect(countZeros([1,1,1,1,0,0,0,0,0,0,0,0,0,0])).toEqual(10)
})
