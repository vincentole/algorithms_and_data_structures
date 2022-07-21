import multiplyArbitraryPrecisionIntegers from './multiplyArbitraryPrecisionIntegers';
describe('Arrays', () => {
    describe('multiply arbitrary precision integers', () => {
        const attempt1 = multiplyArbitraryPrecisionIntegers([1, 2, 3], [9, 8, 7]);
        const attempt2 = multiplyArbitraryPrecisionIntegers([-1, 2, 3], [9, 8, 7]);
        expect(attempt1).toEqual([1, 2, 1, 4, 0, 1]);
        // expect(attempt2).toEqual([-1, 2, 1, 4, 0, 1]);
    });
});
