#!/usr/bin/node
"use strict";
var LinkedListNameSpace;
(function (LinkedListNameSpace) {
    class StackNode {
        constructor(value) {
            this.next = null;
            this._value = value;
        }
        get value() {
            return this._value;
        }
    }
    class Stack {
        constructor() {
            this.top = null;
            this.bottom = null;
            this.length = 0;
        }
        peek() {
            if (this.top)
                return this.top.value;
            return null;
        }
        push(value) {
            const newNode = new StackNode(value);
            if (!this.top || !this.bottom) {
                this.top = newNode;
                this.bottom = newNode;
                this.length++;
                return;
            }
            newNode.next = this.top;
            this.top = newNode;
            this.length++;
        }
        pop() {
            if (!this.top || !this.bottom)
                return null;
            if (this.length === 1) {
                this.bottom = null;
            }
            const popedValue = this.top.value;
            this.top = this.top.next;
            this.length--;
            return popedValue;
        }
        isEmpty() {
            return this.length === 0;
        }
    }
    const myStack = new Stack();
    myStack.push('vim.com');
    myStack.push('github.com');
    myStack.push('openSource.com');
    console.log('is empty ', myStack.isEmpty());
    console.log(myStack);
    console.log('peek ', myStack.peek());
    console.log('pop ', myStack.pop());
    console.log(myStack);
    console.log('peek ', myStack.peek());
    console.log('pop ', myStack.pop());
    console.log('peek ', myStack.peek());
    console.log('pop ', myStack.pop());
    console.log('peek ', myStack.peek());
    console.log('pop ', myStack.pop());
    console.log('is empty ', myStack.isEmpty());
    console.log('peek ', myStack.peek());
})(LinkedListNameSpace || (LinkedListNameSpace = {}));
