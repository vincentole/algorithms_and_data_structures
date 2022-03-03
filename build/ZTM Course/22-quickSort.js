#!/usr/bin/node
"use strict";
var QuickSortNameSpace;
(function (QuickSortNameSpace) {
    function quickSort(array, start = 0, end = array.length - 1) {
        if (array.length <= 1) {
            return array;
        }
        if (start >= end) {
            return;
        }
        const pivotIndex = partition(array, start, end);
        quickSort(array, start, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, end);
        return array;
    }
    function partition(array, start, end) {
        let finalPivotIndex = start;
        let pivot = end;
        for (let i = start; i < end; i++) {
            if (array[i] < array[pivot]) {
                // swap final pivot index value and i value
                [array[finalPivotIndex], array[i]] = [array[i], array[finalPivotIndex]];
                finalPivotIndex++;
            }
        }
        // swap final pivor index value and pivot value
        [array[finalPivotIndex], array[pivot]] = [array[pivot], array[finalPivotIndex]];
        return finalPivotIndex;
    }
    console.log(quickSort([1, 32, 21]));
})(QuickSortNameSpace || (QuickSortNameSpace = {}));
