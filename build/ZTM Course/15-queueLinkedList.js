#!/usr/bin/node
"use strict";
var LinkedListNameSpace;
(function (LinkedListNameSpace) {
    class QueueNode {
        constructor(value) {
            this.next = null;
            this._value = value;
        }
        get value() {
            return this._value;
        }
    }
    class Queue {
        constructor() {
            this.first = null;
            this.last = null;
            this.length = 0;
        }
        peek() {
            if (!this.first)
                return null;
            return this.first.value;
        }
        enqueue(value) {
            const newNode = new QueueNode(value);
            if (!this.first || !this.last) {
                this.first = newNode;
                this.last = newNode;
                this.length++;
                return;
            }
            this.last.next = newNode;
            this.last = newNode;
            this.length++;
        }
        dequeue() {
            if (this.length === 1) {
                this.last = null;
            }
            if (this.first) {
                const dequeuedVal = this.first.value;
                this.first = this.first.next;
                this.length--;
                return dequeuedVal;
            }
            return null;
        }
    }
    const myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    console.log(myQueue);
    console.log(myQueue.peek());
    console.log(myQueue.dequeue());
    console.log(myQueue.dequeue());
    console.log(myQueue);
    console.log(myQueue.dequeue());
    console.log(myQueue.dequeue());
    console.log(myQueue.peek());
})(LinkedListNameSpace || (LinkedListNameSpace = {}));
