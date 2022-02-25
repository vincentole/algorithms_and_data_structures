#!/usr/bin/node
"use strict";
var LinkedListNameSpace;
(function (LinkedListNameSpace) {
    // 1.  Write down key points:
    //       Implement queue using only stacks
    //       Stack methods: push to top, peek, pop from top, size, isEmpty
    // 2.  Double check input, output:
    //       not relevant here
    // 3.  What to optimize for: time and space
    // 4.  Explain naive/brute force solution:
    //       Have two stacks, when pushing we can push to top of stack,
    //       When poping/peeking we need to access bottom element:
    //       push(pop) all elements to second stack. Then top can be accessed.
    //       Then push(pop) back to stack1
    // 5.  Explain why suboptimal:
    //       Since we need to push(pop) through whole stack it is
    //       time complexity: O(n)
    //       space complexity: O(n)
    // 6.  Walk through your approach: breaking points, bottleneck
    //       instead of push(pop) back and forth we cann just use it once
    //       and only reverse when needed. This will give amortized analysis of:
    //       time complexity: O(1)
    //       space complexity: O(n)
    // 7.  Write down steps:
    //       push => normal push from pushStack
    //       pop/peek => check if popStack is empty: yes => move items from push stack over
    //       no => pop/peek from popStack.
    // 8.  Start code: comment, modularize, clean code
    class Stack {
        constructor() {
            this.data = [];
        }
        push(value) {
            this.data.push(value);
        }
        pop() {
            return this.data.pop();
        }
        peek() {
            return this.data[this.data.length - 1];
        }
        isEmpty() {
            return this.data.length === 0;
        }
        get length() {
            return this.data.length;
        }
    }
    class Queue {
        constructor() {
            this.pushStack = new Stack();
            this.popStack = new Stack();
        }
        get length() {
            return this.pushStack.length + this.popStack.length;
        }
        push(value) {
            this.pushStack.push(value);
        }
        pop() {
            this.checkAndTransferPushStack();
            return this.popStack.pop();
        }
        peek() {
            this.checkAndTransferPushStack();
            return this.popStack.peek();
        }
        isEmpty() {
            return this.length === 0;
        }
        checkAndTransferPushStack() {
            if (this.popStack.isEmpty()) {
                while (!this.pushStack.isEmpty()) {
                    this.popStack.push(this.pushStack.pop());
                }
            }
        }
    }
    const myQueue = new Queue();
    console.log(myQueue.push(1));
    console.log(myQueue.push(2));
    console.log(myQueue.peek());
    console.log(myQueue.pop());
    console.log(myQueue.isEmpty());
    myQueue.push(3);
    console.log(myQueue.peek());
    console.log(myQueue);
})(LinkedListNameSpace || (LinkedListNameSpace = {}));
