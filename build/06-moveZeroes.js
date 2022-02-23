#!/usr/bin/node
"use strict";
var MoveZeroesNameSpace;
(function (MoveZeroesNameSpace) {
    // 1.  Write down key points:
    //       given int number[], move all 0s to the end
    //       keep relative order of all other elements
    // 2.  Double check inputs and outputs:
    //       inputs: array of integers, out: array with 0s at the end
    // 3.  What to maximize for: time, space: both
    // 4.  Explain brute force method:
    //       init numbers, init zeroes,loop through array and pushnumbers and zeroes
    //       then combine both at the end
    // 5.  Why is it not optimal:
    //       time complexity: O(n)
    //       space complexity: O(n)
    //       I don't think we can optimiye time complexity,
    //       But space complexity could be optimized
    // 6.  Walk through your approach:
    //       focus on breaking points and bottleneck,
    //       init lastNonZero = 0, start loop, if item not zero,
    //       swap with lastNonZero + 1, lastNonZero++, return array
    //       time complexity: O(n)
    //       space complexity: O(1)
    // 7.  Write dowon steps: see above
    // 8.  Start to code: comments, mudularize, clean code
    function moveZeroes(nums) {
        let lastNonZeroIndex = 0;
        nums.forEach((item, i) => {
            if (item !== 0) {
                [nums[lastNonZeroIndex], nums[i]] = [nums[i], nums[lastNonZeroIndex]];
                lastNonZeroIndex++;
            }
        });
        return nums;
    }
    console.log(moveZeroes([]));
    console.log(moveZeroes([4, 3]));
    console.log(moveZeroes([0, 1, 0, 3, 12]));
    console.log(moveZeroes([0]));
    console.log(moveZeroes([0, 0, 0, 3, 5, 0, 0, 54, 0, 5, 0, 0, 0]));
    // 9.  Think of errors, breaking inputs, tests, unit tests:
    //       perform unit tests with pre built edge cases such as empty array,
    //       0 in beginning, 0 at the end, no zero, only, zero
    // 10. Check your answer with an example, is there repeated code: checked
    // 11. Efficiency and scalability:
    //       We could batch read nums and output directly to a file,
    //       We then would reference pointeres to the location in the file
    //       rather than index of the array
})(MoveZeroesNameSpace || (MoveZeroesNameSpace = {}));
