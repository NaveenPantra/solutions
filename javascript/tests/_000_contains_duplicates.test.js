import {containsDuplicateV1, containsDuplicateV2} from './../_000_contains_duplicates.js'

test('containsDuplicateV1', () => {
    const arr = [1, 2, 3, 4, 5, 6, 5, -1, 2, -1, 0];
    const containsDuplicateNumbers = containsDuplicateV1(arr);
    expect(containsDuplicateNumbers).toBeTruthy()
})

test('containsDuplicateV2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 5, -1, 2, -1, 0];
    const containsDuplicateNumbers = containsDuplicateV2(arr);
    expect(containsDuplicateNumbers).toBeTruthy()
})