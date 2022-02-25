#!/usr/bin/node
"use strict";
var MaxSubarrayNameSpace;
(function (MaxSubarrayNameSpace) {
    // 1.  Write down key points:
    //        given integer[] numns, find contiguouus subarray
    //        ,containing at least 1 number, with largest sum
    //        return its sum
    //        Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    //        Output: 6
    //        Explanation: [4,-1,2,1] has the largest sum = 6.
    // 2.  Double check inputs and outputs:
    //        input: numbers[], output: sum, int
    // 3.  What to maximize for: time, space: time
    // 4.  Bruteforce/naive solution:
    //        init sum = 0, start loop at i=1, check item 0,i
    //        at each i start another loop at j=i+1, check i+j
    // 5.  Why is this suboptimal:
    //        time complexity: O(n^2)
    //        space complexity: O(1)
    //
    // 6.  Walk through your approach:
    //       breaking point, bottleneck is the recurring nested loop,
    //       one loop, init two pointers, init sum = 0, sum up items,
    //       if check if new sum > old sum => keep new sum
    //       if sum between pointers <= 0 set first pointer to i,
    //       time complexity: O(n)
    //       space complexity: O(1)
    // 7.  Write down steps:
    //       init maxSum=i_0, init pointerSum = i_0, start loop at 1
    //       if number > maxSum => maxSum = number
    //       if (pointerSum < 0 && i > pointerSum) pointerSum = i
    //       if (pointerSum > maxSum) maxSum = pointerSum
    //       pointerSum + i
    // 8.  Start coding: comment, modularize, clean code
    function maxSubarray(nums) {
        if (nums.length === 0)
            return null;
        let maxSum = nums[0];
        let pointerSum = -1;
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const prevPointerSum = pointerSum;
            pointerSum += num;
            if (pointerSum < 0 || prevPointerSum < 0)
                pointerSum = num;
            if (num > maxSum)
                maxSum = num;
            if (pointerSum > maxSum)
                maxSum = pointerSum;
        }
        return maxSum;
    }
    console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
    console.log(maxSubarray([1]));
    console.log(maxSubarray([5, 4, -1, 7, 8]));
    // 9.  Think about errors, breaking input, test, unit tests, etc.
    //       only negative, different orderings
    // 10. Check with example, repeated code, etc: working
    // 11. Efficiency and scalability:
    //       since we only use pointers, solution is scalable.
    //       batches of elements could be read separately into the function,
    //       while keeping the pointers and sum in memory.
})(MaxSubarrayNameSpace || (MaxSubarrayNameSpace = {}));
