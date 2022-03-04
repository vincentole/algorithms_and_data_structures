#!/usr/bin/node
"use strict";
var FistRecurringCharNameSpace;
(function (FistRecurringCharNameSpace) {
    class minHeap {
        constructor() {
            this.data = [];
            this.length = 0;
        }
        insert(value) {
            this.data.push(value);
            this.length++;
            this.swim(this.length - 1);
        }
        swim(index) {
            if (index > 0) {
                const parent = Math.floor((index - 1) / 2);
                if (this.data[index] < this.data[parent]) {
                    [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
                    this.swim(parent);
                }
            }
        }
        deleteMin() {
            if (this.length === 0)
                return null;
            const lastValue = this.data.pop();
            this.length--;
            if (this.length >= 1) {
                this.data[0] = lastValue;
                this.sink(0);
            }
        }
        sink(index) {
            const leftChild = index * 2 + 1;
            const rightChild = index * 2 + 2;
            let minimum = leftChild;
            if (leftChild >= this.length && rightChild >= this.length) {
                return;
            }
            // if right child then left child must also be, because of left to right insertion
            if (rightChild < this.length) {
                if (this.data[rightChild] < this.data[leftChild]) {
                    minimum = rightChild;
                }
            }
            if (this.data[index] > this.data[minimum]) {
                [this.data[index], this.data[minimum]] = [this.data[minimum], this.data[index]];
                this.sink(minimum);
            }
        }
    }
    const myHeap = new minHeap();
    myHeap.insert(1);
    myHeap.insert(2);
    myHeap.deleteMin();
    console.log(myHeap.data);
})(FistRecurringCharNameSpace || (FistRecurringCharNameSpace = {}));
