// 1. Write down key points
// [1, 2, 4, 4] , sum = 8 => true
// given an array and a sum return true of false when the sum of two pairs in the array equal sum.
// [1, 2, 3, 9,], sum = 8 => false

// array can be read in memory
// array is sorted in decending order

// 2. Double check: what are inputs, what are outputs
// input sorted array of numbers, output boolean

// 3. What do we need to optimize for? Space, Time, Readability
// Here time complexity

// 4. Explain brute force method.
// We have two nested for loops,
// inside the first we count from i=0 to n inside the second one from i+1 to n.
// then return item i + item j === sum
// Time complexity: O(n^2)
// for n = 10 the second loop will produce the series 10, ... 1
// => reorder 10, ... 1, into 10 9+1, 8+2, 7+3, 6+4, 5
// this is 10 * 5 + 5 => n * 1/2 n + 1/2 n
// this is  n^2/2 + n/2 => (n^2 + n) / 2
// asymptotically: O(n^2) :only keep highest order term
// Space complexity: O(1)

// 5. Explain why this approach is not the best.
// We have high time complexity

// 6. Walk though your code, explain bottlenecks (biggest O), focus on that, did you use all information?
// Loop through the array and store values in a hash set.
// Before each step, check if sum - number is stored in the hash set.
// If yes return true, if not, store number in hash set and loop on.
// If loop ends return false.
// Higher space complexity of O(n), but only time complexity of O(n).

// 7. Write down steps before coding
// init hash set, loop, check, return?, store in set, return false

// 8. Start coding, modularize code, add comments, use clean code (proper e.g. proper naming)
// Make sure to understand the problem and solution before starting to code!
// If you cant remember a function, make one up to at least keep going.

function hasPairWithSum(arr: number[], sum: number) {
    const complementSet = new Set();
    for (const num of arr) {
        if (complementSet.has(sum - num)) {
            return true;
        }
        complementSet.add(num);
    }
    return false;
}

const arr1 = [1, 2, 4, 4];
const arr2 = [1, 3, 6, 9];

console.log(hasPairWithSum(arr1, 8));
console.log(hasPairWithSum(arr2, 8));

// 9. Think about error checks, how code might be broken/exploited, check false inputs.
// Comment in the test you would do, you wont have to write the actuall tests.
// Add thath you would add tests and test functions i.e. unit tests.

// We could have a randomized unit test, to check for validity.
// What happens for input of null, empty array, undefined, massive arrays, ...

// 10. Test your code: check if you repeat yourself, check for no params, 0, undefined, null, async code.

// 11. Where to improve, how to scale, what was the most impressive solutin for the inverviewer?
// For lage array but with limited range:
// We can handle the set in memory (limited range) but the input is too long we can split the reading up into batches.
// We could also parallelize the creation of the hash set and reconcile all sets to one.
// Devide and conquer appraoch.
// Perform distributed processing of data
// Only read certain chunks of input from disk into memory
// write output back to disk
// Combine outpus later
