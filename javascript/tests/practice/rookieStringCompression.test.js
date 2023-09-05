import { rookieStringCompression } from "../../practice/strings/_002_rookieStringCompression.js";

test('rookieStringCompression', () => {
    expect(rookieStringCompression('aabb')).toStrictEqual('a2b2')
    expect(rookieStringCompression('a')).toStrictEqual('a1')
    expect(rookieStringCompression('')).toStrictEqual('')
    expect(rookieStringCompression('  ')).toStrictEqual(' 2')
    expect(rookieStringCompression('Naveen Pantra')).toStrictEqual('N1a1v1e2n1 1P1a1n1t1r1a1')
    expect(rookieStringCompression('aabbcccdefffg')).toStrictEqual('a2b2c3d1e1f3g1')

})
