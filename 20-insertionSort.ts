#!/usr/bin/node

namespace InsertionSortNameSpace {
    function insertionSort(array: number[]) {
        for (let i = 0; i < array.length; i++) {
            let j = i - 1;
            while (j > 0 && array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                j--;
            }
        }

        return array;
    }

    console.log(insertionSort([1, 56, 4, 32, 34, 33, 54, 43, 65, 44]));
}
