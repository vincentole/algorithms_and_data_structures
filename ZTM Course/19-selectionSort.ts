#!/usr/bin/node

namespace SelectionSortNameSpace {
    function selectionSort(array: number[]) {
        for (let i = 0; i < array.length - 1; i++) {
            let idxSmallest = i;

            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[idxSmallest]) idxSmallest = j;
            }

            [array[i], array[idxSmallest]] = [array[idxSmallest], array[i]];
        }

        return array;
    }

    console.log(selectionSort([1, 56, 4, 32, 34, 33, 54, 43, 65, 44]));
}
