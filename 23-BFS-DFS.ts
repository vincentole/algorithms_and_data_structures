#!/usr/bin/node

namespace DFSBFSNameSpace {
    class QueueNode<T> {
        private _value: T;
        next: QueueNode<T> | null = null;
        constructor(value: T) {
            this._value = value;
        }
        get value() {
            return this._value;
        }
    }
    class Queue<T> {
        private start: QueueNode<T> | null = null;
        private end: QueueNode<T> | null = null;
        private _length = 0;

        get length() {
            return this._length;
        }

        enqueue(value: T) {
            const newNode = new QueueNode(value);

            if (!this.start || !this.end) {
                this.start = newNode;
                this.end = newNode;
            } else {
                this.end.next = newNode;
                this.end = newNode;
            }
            this._length++;
        }

        dequeue() {
            if (!this.start) {
                return null;
            } else if (!this.start.next) {
                const outputNode = this.start;
                this.start = null;
                this._length--;
                return outputNode.value;
            } else {
                const outputNode = this.start;
                this.start = this.start.next;
                this._length--;
                return outputNode.value;
            }
        }

        toArray() {
            const output: T[] = [];
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

    class TreeNode<T> {
        value: T;
        left: TreeNode<T> | null = null;
        right: TreeNode<T> | null = null;

        constructor(value: T) {
            this.value = value;
        }
    }

    class BinarySearchTree<T> {
        private root: TreeNode<T> | null = null;

        add(value: T) {
            if (!this.root) {
                this.root = new TreeNode(value);
                return;
            }

            this.addAux(this.root, value);
        }

        private addAux(node: TreeNode<T>, value: T) {
            if (value < node.value) {
                if (node.left) {
                    this.addAux(node.left, value);
                } else {
                    node.left = new TreeNode(value);
                }
            } else if (value > node.value) {
                if (node.right) {
                    this.addAux(node.right, value);
                } else {
                    node.right = new TreeNode(value);
                }
            } else {
                // Item already exists
            }
        }

        lookup(value: T) {
            if (!this.root) {
                return false;
            }

            return this.lookupAux(this.root, value);
        }

        private lookupAux(node: TreeNode<T>, value: T): boolean {
            if (value < node.value) {
                if (node.left) {
                    return this.lookupAux(node.left, value);
                } else {
                    return false;
                }
            } else if (value > node.value) {
                if (node.right) {
                    return this.lookupAux(node.right, value);
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }

        delete(value: T) {
            return this.deleteAux(this.root, value);
        }

        private deleteAux(node: TreeNode<T> | null, value: T) {
            if (!node) return null;

            if (value < node.value) {
                node.left = this.deleteAux(node.left, value);
            } else if (value > node.value) {
                node.right = this.deleteAux(node.right, value);
            } else {
                if (node.left && node.right) {
                    const leftMostNode = this.getLeftMostNode(node.right);
                    node.value = leftMostNode.value;
                    node.right = this.deleteAux(node.right, leftMostNode.value);
                } else if (node.left) {
                    node = node.left;
                } else if (node.right) {
                    node = node.right;
                } else {
                    node = null;
                }
            }
            return node;
        }

        private getLeftMostNode(node: TreeNode<T>): TreeNode<T> {
            if (node.left) {
                return this.getLeftMostNode(node.left);
            } else return node;
        }

        breadthFirstSearchTraversalRecursive() {
            if (!this.root) {
                return null;
            }

            const queue = new Queue<TreeNode<T>>();
            queue.enqueue(this.root);
            const output = this.bfstRecursiveAux(queue, []);
            return output;
        }

        private bfstRecursiveAux(queue: Queue<TreeNode<T>>, output: T[]): T[] {
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

            const queue = new Queue<TreeNode<T>>();
            queue.enqueue(this.root);
            const output = this.bfstAux(queue, []);
            return output;
        }

        private bfstAux(queue: Queue<TreeNode<T>>, output: T[]) {
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

        private dfsInOrderAux(node: TreeNode<T> | null, output: T[]): T[] {
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

        private dfsPreOrderAux(node: TreeNode<T> | null, output: T[]) {
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

        private dfsPostOrderAux(node: TreeNode<T> | null, output: T[]) {
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

    const myTree = new BinarySearchTree<number>();
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
}
