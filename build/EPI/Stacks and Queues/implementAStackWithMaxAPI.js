class Stack {
    constructor() {
        this._data = [];
        this.cachedMaxWithCount = [];
    }
    get cache() {
        return this.cachedMaxWithCount;
    }
    get data() {
        return this._data;
    }
    push(value) {
        const cacheLength = this.cachedMaxWithCount.length;
        if (cacheLength === 0) {
            this.cachedMaxWithCount.push({ max: value, count: 1 });
        }
        else if (this.max() >= value) {
            this.cachedMaxWithCount[cacheLength - 1].count++;
        }
        else {
            this.cachedMaxWithCount.push({ max: value, count: 1 });
        }
        this.data.push(value);
        return this;
    }
    pop() {
        if (this.data.length <= 0)
            return null;
        const cacheLength = this.cachedMaxWithCount.length;
        const cacheItem = this.cachedMaxWithCount[cacheLength - 1];
        if (cacheItem.count <= 1) {
            this.cachedMaxWithCount.pop();
        }
        else {
            cacheItem.count--;
        }
        return this.data.pop();
    }
    max() {
        if (this.data.length <= 0)
            return null;
        return this.cachedMaxWithCount[this.cachedMaxWithCount.length - 1].max;
    }
}
export default Stack;
