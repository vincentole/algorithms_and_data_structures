#!/usr/bin/node

namespace MyArrayNameSpace {
    class MyArray<T> {
        private _length: number = 0;
        get length() {
            return this._length;
        }
        readonly data: { [key: number]: T } = {};

        private shiftIndexDown(startIndex: number) {
            for (let i = startIndex; i < this._length; i++) {
                const value = this.data[i + 1];
                delete this.data[i + 1];
                this.data[i] = value;
            }
        }

        get(index: number) {
            return this.data[index];
        }
        push(item: T) {
            this.data[this._length] = item;
            this._length++;
            return this._length;
        }
        pop() {
            const lastItem = this.data[this._length - 1];
            delete this.data[this._length - 1];
            this._length--;
            return lastItem;
        }
        shift() {
            const firstItem = this.data[0];
            delete this.data[0];
            this._length--;
            this.shiftIndexDown(0);
            return firstItem;
        }
    }

    const array1 = new MyArray<string | number>();
    array1.push('Hello');
    array1.push(34);
    array1.push(99);
    console.log(array1);
    array1.shift();
    console.log(array1);
}
