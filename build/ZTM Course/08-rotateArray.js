#!/usr/bin/node
"use strict";
var RotateArrayNameSpace;
(function (RotateArrayNameSpace) {
    // 1.  Write down key points:
    //       given array, rorate array to right by k steps,
    //       k is non-negative
    //       Input: nums = [1,2,3,4,5,6,7], k = 3
    //       Output: [5,6,7,1,2,3,4]
    // 2.  Double check input and output:
    //       input: array, non-negative int k, output: array
    // 3.  What to maximize for: time and space
    // 4.  Explain brute force / naive method:
    //       loop k times, unshift(nums.pop()) each time
    // 5.  Explain why suboptimal:
    //       time complexity: O(k * n)
    //       space complexity: O(1)
    // 6.  Walk though your approach:
    //       breaking points, bottleneck: double loop
    //       split array at len - k, return concat
    // 7.  Write down steps:
    //       split array at nums.length,
    //       return [second part, first part]
    //       time complexity: O(a + b)
    //       space complexity: O(n)
    // 8.  Start coding: comment, modularize, clean code:
    function rotateArray(nums, k) {
        const cutIndex = k % nums.length;
        return [...nums.slice(-cutIndex), ...nums.slice(0, -cutIndex)];
    }
    function rotateArray2(nums, k) {
        const cutIndex = k % nums.length;
        nums.unshift(...nums.splice(-cutIndex));
        return nums;
    }
    console.log(rotateArray2([], 3));
    console.log(rotateArray2([1, 2, 3, 4, 5, 6, 7], 3));
    console.log(rotateArray2([-1, -100, 3, 99], 2));
    console.log(rotateArray2([1, 4, 2, 0, 0], 0));
    console.log(rotateArray2([1, 4, 2, 0, 0], 21));
    // 9.  Think about errors, breaking input, tests, unit tests:
    //       empty array, zero k, k larger than array length.
    // 10. Test with example, repeaded code: checked
    // 11. Efficiency and scalability:
    //        solution with space complexity of O(1)
    //        but I think then we cannot keep time complexity at O(n)
    //
})(RotateArrayNameSpace || (RotateArrayNameSpace = {}));
