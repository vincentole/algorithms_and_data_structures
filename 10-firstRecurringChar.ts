#!/usr/bin/node

namespace FistRecurringCharNameSpace {
    // 1.  Write down key points:
    //       given number[], return first recurring character
    //       [2,5,1,2,4,3,5,4,2] => 2
    //       [2,1,1,4,3,5] => 1
    //       [1,2,3,4,5,6] => undefined
    // 2.  Double check inputs and outpus:
    //       input: array, outut: number
    // 3.  What to maximize for: time and space
    // 4.  Explain brute force/naive method:
    //       nested loops, 1st 0-n, then at each element i-n,
    //       check in second loop if item1 === item2
    //       if yes return item1, after loop return undefined
    // 5.  Explain why its not optimal:
    //       time complexity: O(n!)
    //       space complexity: O(1)
    // 6.  Walk though your approach:
    //       breaking points, bottleneck: nested loop
    //       init set, loop over array, if set has item return item,
    //       else add item to set, after loop, return undefined
    //       time complexity: O(n)
    //       space complexity: O(n)
    // 7.  Write down steps: see above
    // 8.  Start coding: comments, modularization, clean code

    function firstRecurringChar(array: string[] | number[]) {}
}
