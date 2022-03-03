import { toString, toInteger } from './interconvertStringsAndIntegers';
describe('Strings', () => {
    describe('Interconvert strings and integers', () => {
        it('converts strings to integers', () => {
            expect(toInteger('123')).toEqual(123);
            expect(toInteger('1')).toEqual(1);
            expect(toInteger('-123')).toEqual(-123);
        });
        it('converts integers to strings', () => {
            expect(toString(123)).toEqual('123');
            expect(toString(-1)).toEqual('-1');
            expect(toString(4)).toEqual('4');
            expect(toString(-494)).toEqual('-494');
        });
    });
});
