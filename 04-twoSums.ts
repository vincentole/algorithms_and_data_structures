#!/usr/bin/node

namespace TwoSumsNameSpace {
    // 1.  Write key points on top
    //       given integers nums and int target, return indices of two numbers such thath
    //       they add up to target. Assume exactly one solution. Retrun answer in any order.
    //       Input: nums = [3,2,4], target = 6
    //       Output: [1,2]
    // 2.  Double check inputs and outpus:
    //       Input: array, target, int, must contain solution
    //       Output: array of indexes
    // 3.  What to maximize for: time, space: time
    // 4.  Explain naive/brute force method:
    //       two nested loops, add arr i + arr j, if = target return i,j
    // 5.  Explain why it's not a good solution:
    //       time complexity: O(n^2)
    //       space complexity: O(1)
    // 6.  Walk through your approach, focus on breaking points and bottleneck:
    //       init hash map, loop trhough array, if map has target - item,
    //       return index anf map valur, else store valur in map at i
    //       time complexity: O(n)
    //       space complexity: O(n)
    // 7.  Write down steps:
    //       init map, loop array, if map has target - item: return item value anf index,
    //       else store item at i in map, return false
    // 8.  Start coding: comment, modularize, clean code

    function twoSums(array: number[], target: number) {
        const map = new Map();
        for (let i = 0; i < array.length; i++) {
            const complement = target - array[i];
            if (map.has(complement)) return [map.get(complement), i];
            map.set(array[i], i);
        }
        return false;
    }

    console.log(twoSums([2, 7, 11, 15], 9));
    console.log(twoSums([3, 2, 4], 6));
    console.log(twoSums([3, 3], 6));

    // 9.  Think about errors, breaking input, tests, unit tests:
    //       empty array, target of 0, immediately return,
    // 10. Solve with example, check repetition, improvements
    //       if we have the same numbers, index will be overwritten
    //       only latest seen item will be returned
    // 11. Efficiency and scalability:
    //       if array is large but range is small we can chunk reading of array
    //
}
