#!/usr/bin/node
"use strict";
var DFSBFSNameSpace;
(function (DFSBFSNameSpace) {
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
            this.start = null;
            this.end = null;
            this._length = 0;
        }
        get length() {
            return this._length;
        }
        enqueue(value) {
            const newNode = new QueueNode(value);
            if (!this.start || !this.end) {
                this.start = newNode;
                this.end = newNode;
            }
            else {
                this.end.next = newNode;
                this.end = newNode;
            }
            this._length++;
        }
        dequeue() {
            if (!this.start) {
                return null;
            }
            else if (!this.start.next) {
                const outputNode = this.start;
                this.start = null;
                this._length--;
                return outputNode.value;
            }
            else {
                const outputNode = this.start;
                this.start = this.start.next;
                this._length--;
                return outputNode.value;
            }
        }
        toArray() {
            const output = [];
            let currentNode = this.start;
            while (currentNode) {
                output.push(currentNode.value);
                currentNode = currentNode.next;
            }
            return output;
        }
    }
    const myQueue = new Queue();
    // myQueue.enqueue(1);
    // myQueue.enqueue(2);
    // myQueue.enqueue(3);
    // myQueue.enqueue(4);
    // myQueue.enqueue(5);
    // console.log('length', myQueue.length);
    // console.log(myQueue.toArray());
    // console.log(myQueue.dequeue());
    // console.log(myQueue.dequeue());
    // console.log(myQueue.dequeue());
    // console.log(myQueue.toArray());
    // console.log('length', myQueue.length);
    class TreeNode {
        constructor(value) {
            this.left = null;
            this.right = null;
            this.value = value;
        }
    }
    class BinarySearchTree {
        constructor() {
            this.root = null;
        }
        add(value) {
            if (!this.root) {
                this.root = new TreeNode(value);
                return;
            }
            this.addAux(this.root, value);
        }
        addAux(node, value) {
            if (value < node.value) {
                if (node.left) {
                    this.addAux(node.left, value);
                }
                else {
                    node.left = new TreeNode(value);
                }
            }
            else if (value > node.value) {
                if (node.right) {
                    this.addAux(node.right, value);
                }
                else {
                    node.right = new TreeNode(value);
                }
            }
            else {
                // Item already exists
            }
        }
        lookup(value) {
            if (!this.root) {
                return false;
            }
            return this.lookupAux(this.root, value);
        }
        lookupAux(node, value) {
            if (value < node.value) {
                if (node.left) {
                    return this.lookupAux(node.left, value);
                }
                else {
                    return false;
                }
            }
            else if (value > node.value) {
                if (node.right) {
                    return this.lookupAux(node.right, value);
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        delete(value) {
            return this.deleteAux(this.root, value);
        }
        deleteAux(node, value) {
            if (!node)
                return null;
            if (value < node.value) {
                node.left = this.deleteAux(node.left, value);
            }
            else if (value > node.value) {
                node.right = this.deleteAux(node.right, value);
            }
            else {
                if (node.left && node.right) {
                    const leftMostNode = this.getLeftMostNode(node.right);
                    node.value = leftMostNode.value;
                    node.right = this.deleteAux(node.right, leftMostNode.value);
                }
                else if (node.left) {
                    node = node.left;
                }
                else if (node.right) {
                    node = node.right;
                }
                else {
                    node = null;
                }
            }
            return node;
        }
        getLeftMostNode(node) {
            if (node.left) {
                return this.getLeftMostNode(node.left);
            }
            else
                return node;
        }
        breadthFirstSearchTraversalRecursive() {
            if (!this.root) {
                return null;
            }
            const queue = new Queue();
            queue.enqueue(this.root);
            const output = this.bfstRecursiveAux(queue, []);
            return output;
        }
        bfstRecursiveAux(queue, output) {
            if (!queue.length) {
                return output;
            }
            let currentNode = queue.dequeue();
            currentNode && output.push(currentNode.value);
            if (currentNode && currentNode.left) {
                queue.enqueue(currentNode.left);
            }
            if (currentNode && currentNode.right) {
                queue.enqueue(currentNode.right);
            }
            return this.bfstRecursiveAux(queue, output);
        }
        breadthFirstSearchTraversal() {
            if (!this.root) {
                return null;
            }
            const queue = new Queue();
            queue.enqueue(this.root);
            const output = this.bfstAux(queue, []);
            return output;
        }
        bfstAux(queue, output) {
            while (queue.length > 0) {
                const currentNode = queue.dequeue();
                if (currentNode) {
                    output.push(currentNode.value);
                    if (currentNode.left) {
                        queue.enqueue(currentNode.left);
                    }
                    if (currentNode.right) {
                        queue.enqueue(currentNode.right);
                    }
                }
            }
            return output;
        }
        depthFirstSearchInOrderTraversal() {
            return this.dfsInOrderAux(this.root, []);
        }
        depthFirstSearchPreOrderTraversal() {
            return this.dfsPreOrderAux(this.root, []);
        }
        depthFirstSearchPostOrderTraversal() {
            return this.dfsPostOrderAux(this.root, []);
        }
        dfsInOrderAux(node, output) {
            if (node) {
                if (node.left) {
                    this.dfsInOrderAux(node.left, output);
                }
                output.push(node.value);
                if (node.right) {
                    this.dfsInOrderAux(node.right, output);
                }
            }
            return output;
        }
        dfsPreOrderAux(node, output) {
            if (node) {
                output.push(node.value);
                if (node.left) {
                    this.dfsPreOrderAux(node.left, output);
                }
                if (node.right) {
                    this.dfsPreOrderAux(node.right, output);
                }
            }
            return output;
        }
        dfsPostOrderAux(node, output) {
            if (node) {
                if (node.left) {
                    this.dfsPostOrderAux(node.left, output);
                }
                if (node.right) {
                    this.dfsPostOrderAux(node.right, output);
                }
                output.push(node.value);
            }
            return output;
        }
    }
    const myTree = new BinarySearchTree();
    myTree.add(5);
    myTree.add(7);
    myTree.add(3);
    myTree.add(9);
    myTree.add(1);
    myTree.add(4);
    myTree.add(6);
    console.log(myTree.lookup(1));
    console.log(myTree.lookup(20));
    // console.log(myTree.delete(3));
    console.log(JSON.stringify(myTree));
    console.log(myTree.depthFirstSearchInOrderTraversal());
})(DFSBFSNameSpace || (DFSBFSNameSpace = {}));
