class ListNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class DummyHead {
    constructor() {
        this.value = null;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = new DummyHead();
        this.tail = this.head;
    }
    append(value) {
        const newNode = new ListNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
    toArray() {
        const array = [];
        let currentNode = this.head.next;
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}
function mergeTwoSortedLists(list1, list2) {
    const sortedList = new LinkedList();
    let L1 = list1.head.next;
    let L2 = list2.head.next;
    while (L1 && L2) {
        if (L1.value < L2.value) {
            sortedList.tail.next = L1;
            L1 = L1.next;
        }
        else {
            sortedList.tail.next = L2;
            L2 = L2.next;
        }
        sortedList.tail = sortedList.tail.next;
    }
    sortedList.tail.next = L1 || L2;
    return sortedList;
}
export { LinkedList, mergeTwoSortedLists };
