#!/usr/bin/node

namespace LinkedListNameSpace {
    class Stack<T> {
        data: T[] = [];

        peek() {
            if (this.isEmpty()) return null;
            return this.data[this.data.length - 1];
        }

        push(value: T) {
            this.data.push(value);
        }

        pop() {
            if (this.isEmpty()) return null;
            return this.data.pop();
        }

        isEmpty() {
            return this.data.length === 0;
        }
    }

    const myStack = new Stack();
    console.log(myStack.isEmpty());
    console.log(myStack.push(1));
    console.log(myStack.push(2));
    console.log(myStack.push(3));
    console.log(myStack.peek());
    console.log(myStack.pop());
    console.log(myStack.peek());
    console.log(myStack.pop());
    console.log(myStack.pop());
    console.log(myStack.isEmpty());
    console.log(myStack.peek());
}
