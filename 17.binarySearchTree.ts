#!/usr/bin/node

namespace BinarySearchTreeNameSpace {
    class TreeNode<T> {
        left: TreeNode<T> | null = null;
        right: TreeNode<T> | null = null;
        value: T;

        constructor(value: T) {
            this.value = value;
        }
    }

    class BinarySearchTree<T> {
        private root: TreeNode<T> | null = null;

        isEmpty() {
            return this.root == null;
        }

        add(value: T) {
            if (this.isEmpty()) {
                this.root = new TreeNode(value);
            } else {
                this.addAux(value, this.root!);
            }
        }

        private addAux(value: T, treeNode: TreeNode<T>) {
            // Add to the left
            if (value < treeNode.value) {
                if (!treeNode.left) {
                    treeNode.left = new TreeNode(value);
                } else {
                    this.addAux(value, treeNode.left);
                }
            }
            // Add to the right
            if (value > treeNode.value) {
                if (!treeNode.right) {
                    treeNode.right = new TreeNode(value);
                } else {
                    this.addAux(value, treeNode.right);
                }
            }
            // Already exists hadling can be added below
        }

        contains(value: T) {
            if (this.isEmpty()) {
                return false;
            }

            return this.containsAux(value, this.root!);
        }

        containsAux(value: T, treeNode: TreeNode<T> | null): boolean {
            if (!treeNode) {
                return false;
            }

            if (value < treeNode.value) {
                return this.containsAux(value, treeNode.left);
            }

            if (value > treeNode.value) {
                return this.containsAux(value, treeNode.right);
            }

            return true;
        }

        remove(value: T) {
            if (this.isEmpty()) {
                return;
            }

            return this.removeAux(value, this.root!);
        }

        removeAux(value: T, treeNode: TreeNode<T> | null) {
            if (!treeNode) {
                return null;
            }

            if (value < treeNode.value) {
                treeNode.left = this.removeAux(value, treeNode.left);
            } else if (value > treeNode.value) {
                treeNode.right = this.removeAux(value, treeNode.right);
            } else {
                if (treeNode.left && treeNode.right) {
                    const leftMost = this.getLeftMost(treeNode.right);
                    treeNode.value = leftMost!.value;
                    treeNode.right = this.removeAux(leftMost!.value, treeNode.right);
                } else if (treeNode.left) {
                    treeNode = treeNode.left;
                } else if (treeNode.right) {
                    treeNode = treeNode.right;
                } else {
                    treeNode = null;
                }
            }

            return treeNode;
        }

        getLeftMost(treeNode: TreeNode<T>): TreeNode<T> | null {
            if (!treeNode) {
                return null;
            }

            if (!treeNode.left) {
                return treeNode;
            }

            return this.getLeftMost(treeNode.left);
        }
    }

    const myTree = new BinarySearchTree();
    myTree.add(5);
    myTree.add(3);
    myTree.add(1);
    myTree.add(4);
    myTree.add(8);
    myTree.add(7);
    myTree.add(10);
    myTree.add(9);
    myTree.add(11);
    console.log(myTree.contains(4));
    console.log(myTree.contains(12));
    console.log(myTree.remove(5));
    console.log(JSON.stringify(myTree));
}
