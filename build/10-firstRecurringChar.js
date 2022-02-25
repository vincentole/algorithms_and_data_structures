#!/usr/bin/node
"use strict";
var FistRecurringCharNameSpace;
(function (FistRecurringCharNameSpace) {
    // 1.  Write down key points:
    //       given number[], return first recurring character
    //       [2,5,1,2,4,3,5,4,2] => 2
    //       [2,1,1,4,3,5] => 1
    //       [1,2,3,4,5,6] => undefined
    // 2.  Double check inputs and outpus:
    //       input: array, outut: number
    // 3.  What to maximize for: time and space
    // 4.  Explain brute force/naive method:
    //       be careful that first item is not returned when second has higher index
    //       init out=undefined, nested loops, 1st 0-n, then at each element i+1-n,
    //       check in second loop if item1 === item2 store item AND INDEX in variable
    //       if another item is found check it index is lower and overwrite
    //       return value stored in out
    // 5.  Explain why its not optimal:
    //       time complexity: O(n^2)
    //       space complexity: O(1)
    // 6.  Walk though your approach:
    //       breaking points, bottleneck: nested loop
    //       init set, loop over array, if set has item return item,
    //       else add item to set, after loop, return undefined
    //       time complexity: O(n)
    //       space complexity: O(n)
    // 7.  Write down steps: see above
    // 8.  Start coding: comments, modularization, clean code
    function firstRecurringChar(array) {
        const set = new Set();
        for (const item of array) {
            if (set.has(item))
                return item;
            set.add(item);
        }
        return undefined;
    }
    console.log(firstRecurringChar([2, 5, 1, 2, 4, 3, 5, 4, 2]));
    console.log(firstRecurringChar([2, 1, 1, 4, 3, 5]));
    console.log(firstRecurringChar([1, 2, 3, 4, 5, 6]));
    console.log(firstRecurringChar([]));
    // 9.  Think about errors, input exploits, tests, unit tests:
    //       test with predefined test set
    // 10. Check solution with example, repeated code: checked
    // 11. Efficiency and scalability: if range of array is limited we can read in chunks of input
})(FistRecurringCharNameSpace || (FistRecurringCharNameSpace = {}));
