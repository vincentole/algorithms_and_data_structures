export class minHeap {
    constructor() {
        this.data = [];
    }
    push(value) {
        if (this.data.length === 0) {
            this.data.push(value);
        }
        else {
            this.data.push(value);
            this.swim(this.data.length - 1);
        }
        return this;
    }
    swim(index) {
        if (index <= 0)
            return;
        const parent = Math.floor((index - 1) / 2);
        if (this.data[index].value < this.data[parent].value) {
            [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
            this.swim(parent);
        }
    }
    pop() {
        if (this.data.length === 0) {
            return null;
        }
        else if (this.data.length === 1) {
            return this.data.pop();
        }
        else if (this.data.length === 2) {
            const output = this.data[0];
            this.data[0] = this.data.pop();
            return output;
        }
        else {
            const output = this.data[0];
            this.data[0] = this.data.pop();
            this.sink(0);
            return output;
        }
    }
    sink(index) {
        const len = this.data.length;
        const leftChild = index * 2 + 1;
        const rightChild = index * 2 + 2;
        let minimum = leftChild;
        if (leftChild < len || rightChild < len) {
            if (rightChild < len) {
                if (this.data[rightChild].value < this.data[leftChild].value) {
                    minimum = rightChild;
                }
            }
            if (this.data[minimum].value < this.data[index].value) {
                [this.data[minimum], this.data[index]] = [this.data[index], this.data[minimum]];
                this.sink(minimum);
            }
        }
    }
}
export function mergeSortedArrays(arrays) {
    const heap = new minHeap();
    const arrayIterators = arrays.map((array) => array[Symbol.iterator]());
    arrayIterators.forEach((iterator, index) => {
        const item = iterator.next();
        if (!item.done) {
            heap.push({ value: item.value, array: index });
        }
    });
    const result = [];
    while (heap.data.length > 0) {
        const minItem = heap.pop();
        if (!minItem)
            continue;
        result.push(minItem.value);
        const nextItem = arrayIterators[minItem.array].next();
        if (!nextItem.done) {
            heap.push({ value: nextItem.value, array: minItem.array });
        }
    }
    return result;
}
