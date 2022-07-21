import { advancingThroughAnArray, advancingThroughAnArray2 } from './advancingThroughAnArray';

describe('Arrays', () => {
    describe('advancing through an array', () => {
        it('returns true for advanceable arrays', () => {
            const arr1 = [3, 3, 1, 0, 2, 0, 1];
            const attempt1 = advancingThroughAnArray(arr1);
            expect(attempt1).toBe(true);
        });
        it('returns false for non advanceable arrays', () => {
            const arr1 = [3, 2, 0, 0, 2, 0, 1];
            const attempt1 = advancingThroughAnArray(arr1);
            expect(attempt1).toBe(false);
        });
        it('returns false for non advanceable arrays', () => {
            const arr1 = [1, 1, 0, 0, 2, 0, 1];
            const attempt1 = advancingThroughAnArray2(arr1);
            expect(attempt1).toBe(false);
        });
    });
    describe('advancing through an array 2', () => {
        it('returns true for advanceable arrays', () => {
            const arr1 = [3, 3, 1, 0, 2, 0, 1];
            const attempt1 = advancingThroughAnArray2(arr1);
            expect(attempt1).toBe(true);
        });
        it('returns false for non advanceable arrays', () => {
            const arr1 = [3, 2, 0, 0, 2, 0, 1];
            const attempt1 = advancingThroughAnArray2(arr1);
            expect(attempt1).toBe(false);
        });
        it('returns false for non advanceable arrays', () => {
            const arr1 = [1, 1, 0, 0, 2, 0, 1];
            const attempt1 = advancingThroughAnArray2(arr1);
            expect(attempt1).toBe(false);
        });
    });
});
