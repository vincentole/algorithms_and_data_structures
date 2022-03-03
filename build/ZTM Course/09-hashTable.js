#!/usr/bin/node
"use strict";
var HashTableNameSpace;
(function (HashTableNameSpace) {
    class HashTable {
        constructor(size) {
            this.data = new Array(size);
        }
        hash(key) {
            let hash = 0;
            for (let i = 0; i < key.length; i++) {
                hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            }
            return hash;
        }
        set(key, value) {
            const address = this.hash(key);
            if (!this.data[address]) {
                this.data[address] = [];
            }
            this.data[address].push([key, value]);
            return this.data;
        }
        get(key) {
            const address = this.hash(key);
            const addressField = this.data[address];
            if (addressField) {
                const item = addressField.find((item) => item[0] === key);
                if (item)
                    return item[1];
            }
            return undefined;
        }
        keys() {
            const keysArray = [];
            for (const item of this.data) {
                if (item) {
                    for (const collisionItem of item) {
                        keysArray.push(collisionItem[0]);
                    }
                }
            }
            return keysArray;
        }
    }
    const myHashTable = new HashTable(50);
    myHashTable.set('grapes', 1000);
    myHashTable.set('bananas', 5);
    myHashTable.set('oranges', 6);
    myHashTable.set('cherries', 2);
    console.log(myHashTable.get('grapes'));
    console.log(myHashTable.get('bananas'));
    console.log(myHashTable.keys());
})(HashTableNameSpace || (HashTableNameSpace = {}));
