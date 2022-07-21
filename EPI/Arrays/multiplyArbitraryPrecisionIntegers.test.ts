import multiplyArbitraryPrecisionIntegers from './multiplyArbitraryPrecisionIntegers';

describe('Arrays', () => {
    describe('multiply arbitrary precision integers', () => {
        it('multiplies two positive numbers', () => {
            const attempt1 = multiplyArbitraryPrecisionIntegers([1, 2, 3], [9, 8, 7]);
            // const attempt2 = multiplyArbitraryPrecisionIntegers([-1, 2, 3], [9, 8, 7]);
            expect(attempt1).toEqual([1, 2, 1, 4, 0, 1]);
            // expect(attempt2).toEqual([-1, 2, 1, 4, 0, 1]);
        });
        it('multiplies a negative and a positive number', () => {
            const attempt1 = multiplyArbitraryPrecisionIntegers([-1, 2, 3], [9, 8, 7]);
            expect(attempt1).toEqual([-1, 2, 1, 4, 0, 1]);
        });
        it('multiplies with 0', () => {
            const attempt1 = multiplyArbitraryPrecisionIntegers([-1, 2, 3], [0]);
            expect(attempt1).toEqual([0]);
            const attempt2 = multiplyArbitraryPrecisionIntegers([-1, 2, 3], [0, 0]);
            expect(attempt2).toEqual([0]);
            const attempt3 = multiplyArbitraryPrecisionIntegers([0], [0]);
            expect(attempt3).toEqual([0]);
        });
    });
});
