import theDutchNationalFlagProblem from './theDutchNationalFlagProblem2';
describe('Arrays', () => {
    describe('The Dutch national flag problem', () => {
        const array = [1, 4, 3, 54, 4, 3, 23];
        const pivotIndex = 1;
        const pivot = array[pivotIndex];
        const attempt = theDutchNationalFlagProblem(array, pivotIndex);
        const firstIndex = attempt.indexOf(pivot);
        const lastIndex = attempt.lastIndexOf(pivot);
        const lower = attempt.slice(0, firstIndex);
        const equal = attempt.slice(firstIndex, lastIndex + 1);
        const higher = attempt.slice(lastIndex + 1);
        it('sorts smaller values before the pivot', () => {
            lower.forEach((element) => {
                expect(element).toBeLessThan(pivot);
            });
        });
        it('sorts equal values next to the pivot', () => {
            equal.forEach((element) => {
                expect(element).toEqual(pivot);
            });
        });
        it('sorts larger values after the pivot', () => {
            higher.forEach((element) => {
                expect(element).toBeGreaterThanOrEqual(pivot);
            });
        });
        it('handles empty arrays', () => {
            expect(theDutchNationalFlagProblem([], 0)).toEqual([]);
        });
        it('handles one element', () => {
            expect(theDutchNationalFlagProblem([3], 0)).toEqual([3]);
        });
        it('handles two elements', () => {
            expect(theDutchNationalFlagProblem([7, 2], 0)).toEqual([2, 7]);
        });
        it('handles two elements', () => {
            expect(theDutchNationalFlagProblem([7, 2], 1)).toEqual([2, 7]);
        });
        it('handles two elements', () => {
            expect(theDutchNationalFlagProblem([2, 7], 1)).toEqual([2, 7]);
        });
        it('handles two elements', () => {
            expect(theDutchNationalFlagProblem([2, 7], 0)).toEqual([2, 7]);
        });
    });
});
