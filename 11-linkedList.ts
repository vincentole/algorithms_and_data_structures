#!/usr/bin/node

namespace LinkedListNameSpace {
    class ListNode<T> {
        private _value: T;
        next: ListNode<T> | null;

        constructor(value: T) {
            this._value = value;
            this.next = null;
        }

        get value() {
            return this._value;
        }
    }

    class LinkedList<T> {
        private head: ListNode<T> | null = null;
        private _length = 0;

        constructor(head?: ListNode<T>) {
            this.head = head || null;
        }

        private traverseToIndex(index: number) {
            if (!this.head) {
                throw new Error('Cannot traverse, linked list is empty!');
            }
            if (index < 0) throw new Error('Cannot traverse, index too small!');
            if (index >= this._length) throw new Error('Cannot traverse, index too large!');

            let prevNode = this.head;
            let currNode = this.head;

            for (let i = 0; i < index; i++) {
                prevNode = currNode;
                if (currNode.next) currNode = currNode.next; // should always be true due to append above
            }

            return { prevNode, currNode };
        }

        get length() {
            return this._length;
        }

        append(value: T) {
            const newNode = new ListNode(value);

            if (!this.head) {
                this.head = newNode;
                this._length++;
                return;
            }

            let currNode = this.head;
            while (currNode.next) {
                currNode = currNode.next;
            }
            currNode.next = newNode;
            this._length++;
        }

        prepend(value: T) {
            let newNode = new ListNode(value);

            if (!this.head) {
                this.head = newNode;
                this._length++;
                return;
            }

            newNode.next = this.head;
            this.head = newNode;
            this._length++;
        }

        insert(index: number, value: T) {
            if (index < 0) throw new Error('Index too small!');
            if (index > this._length) throw new Error('Index too large!');

            const newNode = new ListNode(value);

            if (index === 0) {
                this.prepend(value);
                // Don't increase length because prepend already does.
                return;
            }

            if (index === this._length) {
                this.append(value);
                // Don't increase length because append already does.
                return;
            }

            let { prevNode, currNode } = this.traverseToIndex(index);
            newNode.next = currNode;
            this._length++;
        }

        remove(index: number) {
            if (index < 0) throw new Error('Index too small!');
            if (index >= this._length) throw Error('Index too large!');
            if (!this.head) throw Error('Cannot remove item, list is empty!');

            if (index === 0) {
                this.head = this.head.next;
                this._length--;
                return;
            }

            const { prevNode, currNode } = this.traverseToIndex(index);
            prevNode.next = currNode.next;
            this._length--;
        }

        reverse() {
            if (!this.head || !this.head.next) return;

            let nextNode: ListNode<T> | null = this.head.next;
            let currNode: ListNode<T> | null = this.head;
            let prevNode: ListNode<T> | null = null;

            this.head.next = null;

            while (nextNode) {
                prevNode = currNode;
                currNode = nextNode;
                nextNode = nextNode.next;
                currNode.next = prevNode;
            }

            this.head = currNode;
        }

        toArray() {
            if (!this.head) return null;
            const array: T[] = [];

            let currNode: ListNode<T> | null = this.head;
            while (currNode) {
                array.push(currNode.value);
                currNode = currNode.next;
            }

            return array;
        }
    }

    const myLinkedList = new LinkedList();
    myLinkedList.insert(0, 'insert');
    myLinkedList.prepend(1);
    myLinkedList.prepend(2);
    myLinkedList.append(5);
    myLinkedList.append(16);
    myLinkedList.prepend(99);
    myLinkedList.insert(0, 'insert');
    console.log(myLinkedList.toArray());
    console.log(myLinkedList.length);
    myLinkedList.reverse();
    console.log(myLinkedList.toArray());
    console.log(myLinkedList.length);
}
