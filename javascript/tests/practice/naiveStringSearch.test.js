import {naiveStringSearch} from "../../practice/searching/_000_naiveStringSearch.js";

test('naiveStringSearch', () => {
    let str = 'omomom';
    let subStr = 'om';
    expect(naiveStringSearch(str, subStr)).toEqual(3)

    str = 'naveen pantra';
    subStr = 'e';
    expect(naiveStringSearch(str, subStr)).toEqual(2)

    str = 'naveen pantra';
    subStr = 'vijaya';
    expect(naiveStringSearch(str, subStr)).toEqual(0)
})
