import incrementArbitraryPrecisionInteger from './incrementArbitraryPrecisionInteger';
describe('Arrays', () => {
    describe('increment an arbitrary-precision integer', () => {
        it('increments number representation by 1', () => {
            const num1 = [1, 1, 1, 1];
            const num2 = [1, 1, 1, 9];
            const num3 = [1, 1, 9, 9];
            const num4 = [9, 9, 9, 9];
            const num5 = [9, 0, 0, 0];
            const num6 = [5, 9, 9, 9];
            const attempt1 = incrementArbitraryPrecisionInteger(num1);
            const attempt2 = incrementArbitraryPrecisionInteger(num2);
            const attempt3 = incrementArbitraryPrecisionInteger(num3);
            const attempt4 = incrementArbitraryPrecisionInteger(num4);
            const attempt5 = incrementArbitraryPrecisionInteger(num5);
            const attempt6 = incrementArbitraryPrecisionInteger(num6);
            expect(attempt1).toEqual([1, 1, 1, 2]);
            expect(attempt2).toEqual([1, 1, 2, 0]);
            expect(attempt3).toEqual([1, 2, 0, 0]);
            expect(attempt4).toEqual([1, 0, 0, 0, 0]);
            expect(attempt5).toEqual([9, 0, 0, 1]);
            expect(attempt6).toEqual([6, 0, 0, 0]);
        });
    });
});
