#!/usr/bin/node

namespace MergeSortedArraysNameSpace {
    // Two sorted arrays [0, 3, 4, 31], [4, 6, 30]
    // => [0, 3, 4, 4, 6, 30, 31]
    // 1.  Write key points on the top
    // 2.  Double check inputs and outputs:
    //       input: two sorted arrays, different lengths
    //       output: one sorted array
    // 3.  What to maximize for? space, time, ... : time
    // 4.  Explain naive/bute force solution
    //       Initialize output array,
    //       Two nested loops, compare arr1[i] with arr2[j],
    //       if arr2[j] is smaller push arr2[j],
    //       after j loop push arr1[i], return output
    // 5.  Why is it a bad solution:4
    //       time complexity: O(n * m)
    //       space complexity: O(n + m)
    // 6.  Walk though your approach:
    //       breaking point: nested loop, make sure array of numbers, and they are actually sorted
    //       bottleneck: nested loop
    //       def out = [], i, j = 0, while i < arr1.len | j < arr2.len,
    //       if (arr[i] < arr[j]) ) push arr1[i], i++   be careful of undefined
    //       else opposite, return out
    //       time complexity: O(n + m)
    //       space complexity: O(n + m)
    // 7.  Write down steps: see above
    // 8.  Write code: comment, modularize, clean code

    function mergeSortedArrrays(arr1: number[], arr2: number[]) {
        if (arr1.length === 0) return arr2;
        if (arr2.length === 0) return arr1;

        const out: number[] = [];
        let i = 0;
        let j = 0;

        while (i < arr1.length || j < arr2.length) {
            if (!arr2[j] || arr1[i] < arr2[j]) {
                out.push(arr1[i]);
                i++;
            } else {
                out.push(arr2[j]);
                j++;
            }
        }
        return out;
    }

    function mergeSortedArrrays2(arr1: number[], arr2: number[]) {
        if (arr1.length === 0) return arr2;
        if (arr2.length === 0) return arr1;

        const out: number[] = [];
        let i = 0;
        let j = 0;

        const notIteratedBothArrays = () => i < arr1.length || j < arr2.length;
        const shouldPushArr1 = () => !arr2[j] || arr1[i] < arr2[j];

        while (notIteratedBothArrays()) {
            if (shouldPushArr1()) {
                out.push(arr1[i]);
                i++;
            } else {
                out.push(arr2[j]);
                j++;
            }
        }
        return out;
    }

    console.log(mergeSortedArrrays2([0, 3, 4, 31], []));
    console.log(mergeSortedArrrays2([0, 3, 4, 31], [4, 6, 30]));
    console.log(mergeSortedArrrays2([0, 3, 31], [4, 6, 13, 23, 25, 30]));

    // 9.  Think about erros, exploitation, tests, unit testing
    //       test for different arrays, arr1 < arr2, arr1 > arr2, empty arr, ...
    // 10. Check answer, walk though with example, code repeated?
    // 11. Efficiency and scalability:
    //       do some checks if min a > max b and reverse to just append
    //       we could also implement such a check at each loop iteration
}
