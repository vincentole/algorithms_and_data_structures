#!/usr/bin/node

namespace ReverseStringNameSpace {
    // Create a function that reverses a string
    // "Hi my name is Andrei"
    // "ierdnA si eman iH"

    // 1.  Write down key points
    // 2.  Double check inputs and outpus. => input: string, output: string
    // 3.  What to maximize for? time, space, readability, etc. => time
    // 4.  Naive approach: split string, loop backwards
    //       time complexity: O(n)
    //       space complexity: O(n)
    // 5.  Why is this not the best solution: here I think this woulf be optimal.
    // 6.  Walk though your approach:
    //       breaking point: size of string
    //       bottleneck: size of string
    //       a) initiate output b) loop starting with length - 1 of string
    //       c) append each string element of i to output d) return output
    // 7.  Write down  steps: see above
    // 8.  Start coding: comment, modularize, clean code

    // Manual implementation
    function reverseString(string: string) {
        let output: string = '';
        for (let i = string.length - 1; i >= 0; i--) {
            output += string[i];
        }
        return output;
    }

    console.log(reverseString('Hello I am Mike.'));
    console.log(reverseString('This process is great!'));

    // JS built-in method implementation
    function reverseString2(string: string) {
        return string.split('').reverse().join('');
    }

    console.log(reverseString2("I'm getting better and better."));
    console.log(reverseString2('Still flying high.'));

    // 9.  Think about errors, make no assumptions about input,
    //     what tests, unit tests could be implemented
    //       Since its typed it should be fine, large strings could be a problem,
    //       unit test on test set of strings
    // 10. Check solution on example, check if repetition, no params, null, undefined, ...
    // 11. Efficiency improvements, scalability
    //       We could split string and process each string individually,
    //       then combine all strings, starting with last string.
}
