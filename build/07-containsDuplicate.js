#!/usr/bin/node
"use strict";
var ContainsDuplicateNameSpace;
(function (ContainsDuplicateNameSpace) {
    // 1.  Write down key points:
    //       Given int number[], return true if any value twice
    //       return false, if every element is distinct
    //       [1,2,3,1] => true
    //       [1,2,3,4] => false
    // 2.  Double check inputs: inputs: number[], out bool
    // 3.  What to maximize for: time and space
    // 4.  Explain brute force/ naive method
    //       loop 1, loop 2 at each element start at i+1, if elei = elej return true, else false
    // 5.  Explain why not optimal:
    //       time complexity: O(n!)
    //       space complexity: O(1)
    // 6.  Walk though your approach:
    //       breaking point, bottlenack: nested loops
    //       1. use hash set => time, space: O(n), O(n)
    // 7.  Write down steps:
    //       init set, loop nums, if set.has(nums) return true
    //       else set.add(nums), return false
    // 8.  Start coding: comment, modularize, clean code:
    function containsDuplicate(nums) {
        const set = new Set();
        for (const num of nums) {
            if (set.has(num))
                return true;
            set.add(num);
        }
        return false;
    }
    console.log(containsDuplicate([]));
    console.log(containsDuplicate([1, 2, 3, 1]));
    console.log(containsDuplicate([1, 2, 3, 4]));
    console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
    // 9.  Think of errors, breaking input, tests, unit tests:
    //       empty array, simple unit test, to test for different cases/edge cases
    // 10. Check code with example, repeated code: checked
    // 11. Efficiency and scalability:
    //       if nums range is limited we can read in chunks of nums
    //       and hold the set in memory
})(ContainsDuplicateNameSpace || (ContainsDuplicateNameSpace = {}));
