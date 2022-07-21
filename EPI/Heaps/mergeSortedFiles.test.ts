import { mergeSortedArrays, minHeap } from './mergeSortedFiles';

describe('Heaps', () => {
    describe('Merge sorted files', () => {
        it('handles pushing to the heap', () => {
            const myHeap = new minHeap();
            myHeap.push({ value: 3, array: 1 });
            myHeap.push({ value: 5, array: 1 });
            myHeap.push({ value: 1, array: 1 });
            expect(myHeap.data).toEqual([
                { value: 1, array: 1 },
                { value: 5, array: 1 },
                { value: 3, array: 1 },
            ]);
        });
        it('handles poping from the heap', () => {
            const myHeap = new minHeap();
            myHeap.push({ value: 3, array: 1 });
            myHeap.push({ value: 5, array: 1 });
            myHeap.push({ value: 1, array: 1 });
            myHeap.pop();
            expect(myHeap.data).toEqual([
                { value: 3, array: 1 },
                { value: 5, array: 1 },
            ]);
            myHeap.pop();
            expect(myHeap.data).toEqual([{ value: 5, array: 1 }]);
            myHeap.pop();
            expect(myHeap.data).toEqual([]);
            myHeap.pop();
            expect(myHeap.data).toEqual([]);
        });
        it('merges sorted arrays', () => {
            const array1 = [3, 5, 7];
            const array2 = [0, 6];
            const array3 = [0, 6, 28];
            const list = [array1, array2, array3];

            const mergedList = mergeSortedArrays(list);
            expect(mergedList).toEqual([0, 0, 3, 5, 6, 6, 7, 28]);
        });
        it('merges sorted arrays and empty arrays', () => {
            const array1 = [3, 5, 7];
            const array2 = [0, 6];
            const array3 = [0, 6, 28];
            const array4: number[] = [];
            const list = [array1, array2, array3, array4];

            const mergedList = mergeSortedArrays(list);
            expect(mergedList).toEqual([0, 0, 3, 5, 6, 6, 7, 28]);
        });
    });
});
