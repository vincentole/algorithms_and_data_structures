"use strict";
class Stack {
    constructor() {
        this.data = [];
    }
    push(value) {
        this.data.push({ value, max: Math.max(value, this.max()) });
        return this;
    }
    pop() {
        var _a;
        return (_a = this.data.pop()) === null || _a === void 0 ? void 0 : _a.value;
    }
    max() {
        return this.data[this.data.length - 1].max;
    }
}
