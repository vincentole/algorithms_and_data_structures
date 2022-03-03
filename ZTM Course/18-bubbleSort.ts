#!/usr/bin/node

namespace BubbleSortNameSpace {
    function bubbleSort(array: number[]) {
        for (let i = 0; i < array.length - 1; i++) {
            let swapped = false;

            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    swapped = true;
                }
            }

            if (!swapped) return array;
        }
    }

    console.log(bubbleSort([1, 56, 4, 32, 34, 33, 54, 43, 65, 44]));
}
