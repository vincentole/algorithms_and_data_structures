class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class DummyHead<T> {
    value = null;
    next: ListNode<T> | null = null;
}

class LinkedList<T> {
    head = new DummyHead<T>();
    tail: DummyHead<T> | ListNode<T> = this.head;

    append(value: T) {
        const newNode = new ListNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    toArray() {
        const array: T[] = [];
        let currentNode = this.head.next;
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

function mergeTwoSortedLists<T>(list1: LinkedList<T>, list2: LinkedList<T>) {
    const sortedList = new LinkedList();
    let L1 = list1.head.next;
    let L2 = list2.head.next;

    while (L1 && L2) {
        if (L1.value < L2.value) {
            sortedList.tail.next = L1;
            L1 = L1.next;
        } else {
            sortedList.tail.next = L2;
            L2 = L2.next;
        }

        sortedList.tail = sortedList.tail.next;
    }
    sortedList.tail.next = L1 || L2;
    return sortedList;
}

export { LinkedList, mergeTwoSortedLists };
