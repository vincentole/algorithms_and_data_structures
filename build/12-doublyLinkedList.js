#!/usr/bin/node
"use strict";
var LinkedListNameSpace;
(function (LinkedListNameSpace) {
    class ListNode {
        constructor(value) {
            this.prev = null;
            this.next = null;
            this._value = value;
        }
        get value() {
            return this._value;
        }
    }
    class DoublyLinkedList {
        constructor() {
            this._length = 0;
            this.head = null;
            this.tail = null;
        }
        traverseFwdToIndex(index) {
            if (index < 0 || index >= this._length)
                throw new Error('Cannot traverse, invalid index!');
            if (!this.head || !this.tail)
                throw new Error('Cannot traverse list, list is empty!');
            let currNode = this.head;
            for (let i = 0; i < index; i++) {
                if (currNode.next)
                    currNode = currNode.next;
            }
            return { prevNode: currNode.prev, indexNode: currNode };
        }
        traverseBwdToIndex(index) {
            if (index < 0 || index >= this._length)
                throw new Error('Cannot traverse, invalid index!');
            if (!this.head || !this.tail)
                throw new Error('Cannot traverse list, list is empty!');
            let currNode = this.tail;
            for (let i = 0; i < this._length - index - 1; i++) {
                if (currNode.prev)
                    currNode = currNode.prev;
            }
            return { prevNode: currNode.prev, indexNode: currNode };
        }
        get length() {
            return this._length;
        }
        append(value) {
            const newNode = new ListNode(value);
            if (!this.head || !this.tail) {
                this.head = newNode;
                this.tail = newNode;
                this._length++;
                return;
            }
            if (this._length === 1) {
                this.head.next = newNode;
                this.tail = newNode;
                this.tail.prev = this.head;
                this._length++;
                return;
            }
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this._length++;
        }
        prepend(value) {
            const newNode = new ListNode(value);
            if (!this.head || !this.tail) {
                this.head = newNode;
                this.tail = newNode;
                this._length++;
                return;
            }
            if (this._length === 1) {
                this.head = newNode;
                this.head.next = this.tail;
                this.tail.prev = this.head;
                this._length++;
                return;
            }
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this._length++;
        }
        insert(index, value) {
            if (index < 0 || index > this._length)
                throw new Error('Index is invalid');
            if (index === 0) {
                this.prepend(value);
                // Don't increase length since its done in prepend
                return;
            }
            if (index === this._length) {
                this.append(value);
                // Don't increase length since its done in prepend
                return;
            }
            const newNode = new ListNode(value);
            let prevNode;
            let indexNode;
            if (index < Math.floor(this._length / 2)) {
                const { prevNode: _prevNode, indexNode: _indexNode } = this.traverseFwdToIndex(index);
                prevNode = _prevNode;
                indexNode = _indexNode;
            }
            if (index >= Math.floor(this._length / 2)) {
                const { prevNode: _prevNode, indexNode: _indexNode } = this.traverseBwdToIndex(index);
                prevNode = _prevNode;
                indexNode = _indexNode;
            }
            newNode.next = indexNode;
            prevNode.next = newNode;
            indexNode.prev = newNode;
            newNode.prev = prevNode;
            this._length++;
        }
        toArray() {
            const array = [];
            let currNode = this.head;
            while (currNode) {
                array.push(currNode.value);
                currNode = currNode.next;
            }
            return array;
        }
    }
    const myList = new DoublyLinkedList();
    myList.prepend(4);
    myList.prepend(4);
    myList.append(3);
    myList.append(4);
    myList.prepend(2);
    myList.prepend(1);
    console.log(myList.toArray());
    myList.insert(1, 'insert');
    console.log(myList.toArray());
    console.log(myList.length);
})(LinkedListNameSpace || (LinkedListNameSpace = {}));
