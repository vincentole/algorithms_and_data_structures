#!/usr/bin/node

namespace MergeSortNameSpace {
    function mergeSort(array: number[]) {
        const tempArray: number[] = array.slice(0);
        mergeSortAux(array, 0, array.length - 1, tempArray);
        return array;
    }

    function mergeSortAux(
        array: number[],
        leftStart: number,
        rightEnd: number,
        tempArray: number[],
    ) {
        if (leftStart >= rightEnd) {
            return;
        }

        const center = Math.floor((leftStart + rightEnd) / 2);

        mergeSortAux(array, leftStart, center, tempArray);
        mergeSortAux(array, center + 1, rightEnd, tempArray);
        merge(array, leftStart, center, rightEnd, tempArray);
    }

    function merge(
        array: number[],
        leftStart: number,
        center: number,
        rightEnd: number,
        tempArray: number[],
    ) {
        let left = leftStart;
        let right = center + 1;
        let index = leftStart;

        while (left <= center && right <= rightEnd) {
            if (array[left] <= array[right]) {
                tempArray[index] = array[left];
                left++;
            } else {
                tempArray[index] = array[right];
                right++;
            }
            index++;
        }

        for (let i = left; i <= center; i++) {
            tempArray[index] = array[i];
            index++;
        }
        for (let i = right; i <= rightEnd; i++) {
            tempArray[index] = array[i];
            index++;
        }
        for (let i = leftStart; i <= rightEnd; i++) {
            array[i] = tempArray[i];
        }
    }
    console.log(mergeSort([1, 4, 5, 22, 342]));
}
